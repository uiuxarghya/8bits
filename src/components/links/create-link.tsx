"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createLink } from "@/actions/links.actions";
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
import { User } from "@prisma/client";
import { useState } from "react";
import { toast } from "sonner";

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
      <DialogContent className="min-h-[calc(70vh-6rem)] rounded-2xl sm:max-w-3xl">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle>New link</DialogTitle>
            <DialogDescription>Create a new short link.</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination URL</FormLabel>
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
                        8bs.vercel.app
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
            <DialogFooter className="sm:justify-start">
              <Button
                type="submit"
                size="lg"
                className="font-silkscreen ml-auto px-5 tracking-tight"
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
