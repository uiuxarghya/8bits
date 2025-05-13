import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

const MAX_BYTES = 32 * 1024; // 32KB

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 },
    );
  }

  // Validate URL format
  try {
    new URL(url);
  } catch {
    return NextResponse.json(
      { error: "Invalid URL provided" },
      { status: 400 },
    );
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) MetadataScraper/1.0",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch URL. Status: ${response.status}` },
        { status: 500 },
      );
    }

    const reader = response.body?.getReader();
    if (!reader) {
      return NextResponse.json(
        { error: "Failed to read response body" },
        { status: 500 },
      );
    }

    let receivedLength = 0;
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;
      if (value) {
        chunks.push(value);
        receivedLength += value.length;

        if (receivedLength > MAX_BYTES) {
          controller.abort(); // Stop downloading after limit
          break;
        }
      }
    }

    // Concatenate chunks
    const chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (const chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }

    const partialHtml = new TextDecoder("utf-8").decode(chunksAll);

    const $ = cheerio.load(partialHtml);

    const metadata = {
      title:
        $("title").text() ||
        $('meta[name="og:title"]').attr("content") ||
        $('meta[name="twitter:title"]').attr("content") ||
        undefined,
      description:
        $('meta[name="description"]').attr("content") ||
        $('meta[name="og:description"]').attr("content") ||
        $('meta[name="twitter:description"]').attr("content") ||
        undefined,
      image:
        $('meta[property="og:image"]').attr("content") ||
        $('meta[name="twitter:image"]').attr("content") ||
        $('meta[name="image_src"]').attr("content") ||
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        undefined,
      poweredBy: "8bits - Open Source URL Shortener",
    };

    //add the actual URL to the imge if it is a relative URL
    if (metadata.image && !metadata.image.startsWith("http")) {
      const urlObj = new URL(url);
      const imageUrl = new URL(metadata.image, urlObj);
      metadata.image = imageUrl.href;
    }

    const cleanedMetadata = Object.fromEntries(
      Object.entries(metadata).filter(([, value]) => value !== undefined),
    );

    return NextResponse.json(cleanedMetadata);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Request timed out or aborted early" },
        { status: 504 },
      );
    }

    console.error(`Error scraping ${url}:`, error);

    return NextResponse.json(
      { error: "Failed to scrape metadata" },
      { status: 500 },
    );
  }
}
