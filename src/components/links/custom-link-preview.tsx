/* eslint-disable @next/next/no-img-element */
import { getDomain } from "@/lib/utils";
import { CircleHelpIcon, ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { DefaultOGIcon, FacebookIcon, LinkedInIcon, XIcon } from "./icons";

export default function CustomLinkPreview({
  metatags,
  watchedUrl,
}: {
  metatags: {
    title: string;
    description: string;
    image: string;
  } | null;
  watchedUrl: string | null;
}) {
  return (
    <div className="bg-muted/30 text-muted-foreground col-span-2 hidden h-full flex-col items-center justify-center rounded-2xl text-center text-sm font-medium sm:flex">
      <Tabs defaultValue="default" className="h-[350px] w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-slate-700">
              Custom Link Preview
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <CircleHelpIcon className="size-4 cursor-pointer text-slate-500" />
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Displays a preview of your custom shortened link.</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="inline-block leading-none" data-state="closed">
            {/* Placeholder for future content */}
          </div>
        </div>
        <TabsList className="h-7 w-full gap-x-2 bg-transparent p-0">
          <TabsTrigger
            value="default"
            className="rounded-sm border border-slate-300 data-[state=active]:border-slate-400"
            title="Default"
          >
            <DefaultOGIcon className="size-4 text-current" />
          </TabsTrigger>
          <TabsTrigger
            value="x"
            className="rounded-sm border border-slate-300 data-[state=active]:border-slate-400"
            title="X"
          >
            <XIcon className="size-4 text-current" />
          </TabsTrigger>
          <TabsTrigger
            value="linkedin"
            className="rounded-sm border border-slate-300 data-[state=active]:border-slate-400"
            title="LinkedIn"
          >
            <LinkedInIcon className="size-4 text-current" />
          </TabsTrigger>
          <TabsTrigger
            value="facebook"
            className="rounded-sm border border-slate-300 data-[state=active]:border-slate-400"
            title="Facebook"
          >
            <FacebookIcon className="size-4 text-current" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <div className="relative z-0 mt-2">
            <div>
              <div className="group relative overflow-hidden rounded-md border border-slate-300">
                <div className="relative aspect-[var(--aspect,1200/630)] w-full bg-white">
                  {metatags?.image ? (
                    <img
                      src={metatags.image}
                      alt="Open Graph Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <OGImagePlaceholder />
                  )}
                </div>
              </div>
              <textarea
                value={metatags?.title}
                placeholder="Add a title..."
                className="mt-4 line-clamp-2 h-4 w-full resize-none border-none bg-transparent p-0 text-xs font-medium text-slate-900 outline-none focus:ring-0"
                readOnly
              />
              <textarea
                value={metatags?.description}
                placeholder="Add a description..."
                className="mt-1.5 line-clamp-2 h-8 w-full resize-none border-none bg-transparent p-0 text-xs font-normal text-slate-700/80 outline-none focus:ring-0"
                readOnly
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="x">
          <div className="relative z-0 mt-2">
            <div>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-300">
                <div className="relative aspect-[var(--aspect,1200/630)] w-full bg-white">
                  {metatags?.image ? (
                    <img
                      src={metatags.image}
                      alt="Open Graph Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <OGImagePlaceholder />
                  )}
                </div>
                <div className="absolute bottom-2 left-0 w-full px-2">
                  <div className="w-fit max-w-full rounded bg-black/[0.77] px-1.5 py-px">
                    <span className="block max-w-sm truncate text-xs font-normal text-white">
                      {metatags?.title || "Add a title..."}
                    </span>
                  </div>
                </div>
              </div>
              {watchedUrl ? (
                <p className="mt-1 text-left text-xs font-normal text-[#606770]">
                  From {getDomain(watchedUrl || "https://example.com")}
                </p>
              ) : null}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="linkedin">
          <div className="relative z-0 mt-2">
            <div className="flex items-center gap-3 rounded-lg border border-[#8c8c8c33] px-3 py-3">
              <div className="relative aspect-[1200/630] w-32 shrink-0 overflow-hidden rounded-lg">
                <div className="relative aspect-[var(--aspect,1200/630)] w-full bg-white">
                  {metatags?.image ? (
                    <img
                      src={metatags.image}
                      alt="Open Graph Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <OGImagePlaceholder />
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <textarea
                  value={metatags?.title}
                  placeholder="Add a title..."
                  className="line-clamp-2 h-[40px] w-full resize-none border-none p-0 text-sm font-medium text-[#000000E6] outline-none focus:ring-0"
                  readOnly
                />
                <p className="text-left text-xs font-normal text-[#00000099]">
                  {getDomain(watchedUrl || "https://example.com")}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="facebook">
          <div className="relative z-0 mt-2">
            <div>
              <div className="relative border border-slate-300">
                <div className="relative aspect-[var(--aspect,1200/630)] w-full bg-white">
                  {metatags?.image ? (
                    <img
                      src={metatags.image}
                      alt="Open Graph Image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <OGImagePlaceholder />
                  )}
                </div>
                {metatags ? (
                  <div className="grid gap-1 border-t border-slate-300 bg-[#f2f3f5] p-2">
                    <p className="text-left text-xs font-normal text-[#606770] uppercase">
                      {getDomain(watchedUrl || "https://example.com")}
                    </p>
                    <input
                      className="truncate border-none bg-transparent p-0 text-xs font-semibold text-[#1d2129] outline-none focus:ring-0"
                      value={metatags?.title}
                      placeholder="Add a title..."
                      readOnly
                    />
                    <textarea
                      className="mb-1 line-clamp-2 h-4 w-full resize-none rounded-md border-none bg-transparent p-0 text-xs font-normal text-[#606770] outline-none focus:ring-0"
                      value={metatags?.description}
                      placeholder="Add a description..."
                      readOnly
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function OGImagePlaceholder() {
  return (
    <div className="pointer-events-none relative flex size-full flex-col items-center justify-center gap-2">
      <ImageIcon className="size-5 text-slate-700" />
      <p className="max-w-32 text-center text-xs text-slate-700">
        Enter a link to generate a preview
      </p>
    </div>
  );
}
