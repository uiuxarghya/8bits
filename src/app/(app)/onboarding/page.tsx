"use client";

import { updateUserDefaultOrganization } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { toast } from "sonner";
import * as z from "zod";

// Zod Schema Validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, "Organization name must be at least 2 characters long"),
  slug: z
    .string()
    .min(2, "Organization slug must be at least 2 characters long"),
});

export default function CreateOrganizationForm() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Fetch user session and set user ID
  const fetchUserData = useCallback(async () => {
    const { data: session, error } = await authClient.getSession();
    if (error) {
      console.error(error);
      return;
    }
    setUserId(session?.user.id);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
    mode: "onChange",
  });

  // Watch name field and auto-generate slug
  const watchName = form.watch("name");

  useEffect(() => {
    if (watchName) {
      form.setValue("slug", slugify(watchName, { lower: true, strict: true }));
    }
  }, [form, watchName]);

  // Handle form submission
  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!userId) {
      toast.error("User not found. Please login and try again.");
      return;
    }

    setIsSubmitting(true);
    const sanitizedSlug = slugify(data.slug, { lower: true, strict: true });

    try {
      const orgResponse = await authClient.organization.create({
        name: data.name,
        slug: sanitizedSlug,
        logo: `https://api.dicebear.com/9.x/glass/svg?seed=${sanitizedSlug}&radius=50`,
      });

      if (orgResponse?.error) {
        if (orgResponse.error.code === "ORGANIZATION_ALREADY_EXISTS") {
          form.setError("name", {
            type: "manual",
            message: "An organization with this name already exists.",
          });
        } else {
          toast.error(
            `Failed to create organization: ${orgResponse.error.message}`,
          );
        }
        console.error("Organization creation error:", orgResponse.error);
      } else if (!orgResponse?.data?.id) {
        console.error("Organization creation failed:", orgResponse);
        toast.error("Failed to create organization. Please try again.");
      } else {
        toast.success("Organization created successfully!");
        await updateUserDefaultOrganization(userId, orgResponse.data.id);
        await authClient.organization.setActive({
          organizationSlug: orgResponse.data.slug,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-muted">
      <Form {...form}>
        <h1 className="pb-6 text-2xl font-bold">
          Let&apos;s create your first workspace!
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/3 space-y-6 rounded-xl bg-white p-6 shadow-md"
        >
          {/* Workspace Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workspace Name</FormLabel>
                <FormControl>
                  <Input placeholder="Workspace Name" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Workspace Slug */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workspace Slug</FormLabel>
                <FormControl>
                  <Input placeholder="workspace-slug" {...field} />
                </FormControl>
                <FormDescription className="text-xs">
                  This will be used in the URL.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!form.formState.isValid || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 animate-spin" size={18} />
            ) : null}
            {isSubmitting ? "Creating..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
