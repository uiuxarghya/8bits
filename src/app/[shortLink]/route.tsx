import { getLinkDetailsByShortLink } from "@/actions/links.actions";
import { SHORT_LINK_DOMAIN } from "@/lib/constant";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ shortLink: string }> },
) {
  const { shortLink } = await params;

  const url = new URL(request.url);

  if (url.hostname !== SHORT_LINK_DOMAIN) {
    return new Response("Invalid hostname", { status: 400 });
  }

  const linkDetails = await getLinkDetailsByShortLink(shortLink);

  if (!linkDetails) {
    return new Response("Link not found", { status: 404 });
  }

  return Response.redirect(linkDetails.url, 302);
}
