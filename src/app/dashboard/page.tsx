import React from "react";
import SignOutButton from "@/components/auth/sign-out";
import { getSession } from "@/lib/session";

export default async function DashPage() {
  const session = await getSession();
  return (
    <div>
      <div>Dashboard</div>
      <pre className="bg-zinc-100 text-sm">
        {JSON.stringify(session, null, 2)}
      </pre>
      <SignOutButton />
    </div>
  );
}
