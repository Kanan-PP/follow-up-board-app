"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    const result = await authClient.signOut();

    if (result.error) {
      setPending(false);
      return;
    }

    router.replace("/sign-in");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={pending}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-600 transition hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      </svg>
      {pending ? <a>Signing out...</a> : <a className="font-bold">Sign out</a>}
    </button>
  );
}
