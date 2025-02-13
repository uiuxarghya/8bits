"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSignIn() {
  return useCallback(
    async (provider: "google" | "github", callbackURL: string) => {
      const data = await authClient.signIn.social({
        provider,
        callbackURL,
      });

      return data;
    },
    [],
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
