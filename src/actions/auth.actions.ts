"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { getUserDefaultOrganization } from "./user.actions";

export function useSignIn() {
  const router = useRouter();
  return useCallback(
    async (provider: "google" | "github", callbackURL?: string) => {
      const data = await authClient.signIn.social({
        provider,
        callbackURL,
        newUserCallbackURL: "/onboarding",
        fetchOptions: {
          onSuccess: async (ctx) => {
            console.log("onSuccess", ctx);
            const sessionData = await authClient.getSession();
            const userId = sessionData?.data?.user?.id;
            if (userId) {
              const orgId = await getUserDefaultOrganization(userId);
              if (orgId) {
                router.push(`/org/${orgId}`);
              }
            }
          },
        },
      });
      return data;
    },
    [router],
  );
}

export function useSignOut() {
  const router = useRouter();

  return async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };
}
