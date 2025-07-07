"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "@prisma/client";
import { CircleHelpIcon, GlobeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { useDebounce } from "use-debounce";
import { z } from "zod";
import CustomLinkPreview from "@/components/links/custom-link-preview";

import { createLink } from "@/actions/links.actions";
import { SHORT_LINK_DOMAIN } from "@/lib/constant";

const FormSchema = z.object({
  url: z.string().url().min(1, {
    message: "URL is required",
  }),
  shortLink: z.string().min(1, {
    message: "Short link is required",
  }),
});

export default function ShortenLink({ userDetails }: { userDetails: User }) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
      shortLink: "",
    },
  });

  const [metatags, setMetatags] = useState<MetaTags | null>(null);

  const watchedUrl = useWatch({ control: form.control, name: "url" });
  const [debouncedUrl] = useDebounce(watchedUrl, 500);

  useEffect(() => {
    if (!debouncedUrl) return;

    const fetchMeta = async () => {
      try {
        const res = await fetch(
          `/api/metatags?url=${encodeURIComponent(debouncedUrl)}`,
        );
        const data = await res.json();
        setMetatags(data);
      } catch (err) {
        console.error("Failed to fetch metatags", err);
      }
    };

    fetchMeta();
  }, [debouncedUrl]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await createLink({
        longLink: data.url,
        shortLink: data.shortLink,
        userId: userDetails.id,
        organizationId: userDetails.defaultOrganizationId || "",
      });
      toast.success("Link created successfully!");
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Error creating link:", error);
      toast.error("Error creating link. Please try again.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-silkscreen tracking-tight">Shorten Link</Button>
      </DialogTrigger>
      <DialogContent className="min-h-[calc(70vh-6rem)] rounded-2xl sm:max-w-4xl">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-x-2">
              <GlobeIcon className="size-5 text-slate-500" />
              New link
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full grid-cols-5 gap-4"
          >
            <div className="col-span-3 space-y-6">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Destination URL
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelpIcon className="size-4 cursor-pointer text-slate-500" />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="w-72">
                          <p>
                            The URL your users will get redirected to when they
                            visit your short link.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/long-link"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Link</FormLabel>
                    <FormControl>
                      <div className="flex rounded-md shadow-xs">
                        <span className="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm">
                          {SHORT_LINK_DOMAIN}
                        </span>
                        <Input
                          className="-ms-px rounded-s-none shadow-none"
                          placeholder=""
                          type="text"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CustomLinkPreview metatags={metatags} watchedUrl={watchedUrl} />
            <DialogFooter className="col-span-5 flex">
              <Button
                type="submit"
                size="lg"
                className="font-silkscreen px-5 tracking-tight"
              >
                Shorten
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
