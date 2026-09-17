"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { authClient } from "@/lib/auth-client";

type AuthMode = "sign-in" | "sign-up";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const isSignUp = mode === "sign-up";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    const result = isSignUp
      ? await authClient.signUp.email({ name, email, password, callbackURL: "/dashboard" })
      : await authClient.signIn.email({ email, password, callbackURL: "/dashboard" });

    if (result.error) {
      setError(result.error.message || "ไม่สามารถดำเนินการได้ กรุณาลองอีกครั้ง");
      setPending(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-app-bg px-4 py-10">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-112 w-md rounded-full bg-blue-200/30 blur-3xl" />

      <section className="relative w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)] sm:p-8">
        <Link href="/dashboard" className="mb-8 flex items-center justify-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-xl font-bold text-white shadow-md">✓</span>
          <span>
            <strong className="block text-base font-bold tracking-tight text-ink">Follow-up Board</strong>
            <small className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">CRM &amp; Pipeline</small>
          </span>
        </Link>

        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-ink">{isSignUp ? "สร้างบัญชีใหม่" : "ยินดีต้อนรับกลับ"}</h1>
          <p className="mt-2 text-sm text-slate-500">{isSignUp ? "สมัครสมาชิกเพื่อเริ่มจัดการรายชื่อผู้ติดต่อ" : "เข้าสู่ระบบเพื่อจัดการ Follow-up Board"}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <label className="block text-xs font-semibold text-slate-700">
              ชื่อ
              <input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-3 focus:ring-indigo-100" placeholder="ชื่อของคุณ" />
            </label>
          )}

          <label className="block text-xs font-semibold text-slate-700">
            อีเมล
            <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-3 focus:ring-indigo-100" placeholder="name@company.com" />
          </label>

          <label className="block text-xs font-semibold text-slate-700">
            รหัสผ่าน
            <input required minLength={8} maxLength={128} type="password" autoComplete={isSignUp ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-3 focus:ring-indigo-100" placeholder="อย่างน้อย 8 ตัวอักษร" />
          </label>

          {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-xs text-rose-700">{error}</p>}

          <button disabled={pending} className="w-full rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60" type="submit">
            {pending ? "กำลังดำเนินการ..." : isSignUp ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          {isSignUp ? "มีบัญชีอยู่แล้ว?" : "ยังไม่มีบัญชี?"}{" "}
          <Link className="font-semibold text-brand hover:underline" href={isSignUp ? "/sign-in" : "/sign-up"}>{isSignUp ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}</Link>
        </p>
      </section>
    </main>
  );
}
