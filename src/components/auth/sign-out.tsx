"use client";

import { useSignOut } from "@/actions/auth.actions";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const signOut = useSignOut();
  return <Button onClick={signOut}>Sign Out</Button>;
}
