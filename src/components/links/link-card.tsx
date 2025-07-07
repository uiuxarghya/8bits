/* eslint-disable @next/next/no-img-element */
"use client";

import {
  CheckIcon,
  CopyIcon,
  CornerDownRightIcon,
  EllipsisVerticalIcon,
  MousePointerClickIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

type Props = {
  link: {
    id: string;
    url: string;
    shortLink: string;
  };
};

export default function LinkCard({ link }: Props) {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText("8bs.vercel.app/" + link.shortLink);
      toast.success("Link copied to clipboard!");
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link.");
      setIsCopied(false);
    }
  };
  return (
    <li
      key={link.id}
      className="bg-background hover:shadow-accent flex cursor-pointer items-center gap-x-3 rounded-xl border p-3 transition-all duration-200 ease-in-out hover:shadow-xl"
    >
      <img
        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${link.url.replace("https://", "")}`}
        alt="Link Icon"
        className="h-8 w-8 rounded-full border p-1.5"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-start gap-x-2">
          <h2 className="text-primary text-sm font-semibold">
            {"8bs.vercel.app/" + link.shortLink}
          </h2>
          <Button
            variant="ghost"
            onClick={handleCopy}
            className="size-6 rounded-full"
          >
            {isCopied ? (
              <CheckIcon className="size-3 text-green-500" />
            ) : (
              <CopyIcon className="text-muted-foreground size-3" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <CornerDownRightIcon className="text-muted-foreground h-3 w-3" />
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm hover:underline"
          >
            {link.url.replace("https://", "").replace("http://", "")}
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="text-xs">
          <MousePointerClickIcon className="text-muted-foreground mr-1 h-3 w-3" />
          0 Clicks
        </Button>
        <Button variant="outline" className="h-8 w-8" size="icon">
          <EllipsisVerticalIcon className="text-muted-foreground h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}
