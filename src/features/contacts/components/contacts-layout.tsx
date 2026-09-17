import Link from "next/link";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { ContactIcon, type ContactIconName } from "./contact-icon";

const navigation: { label: string; icon: ContactIconName; href: string; active?: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Contacts", icon: "contacts", href: "/contacts", active: true },
  { label: "Tasks & Follow-ups", icon: "tasks", href: "#" },
  { label: "Analytics & Reports", icon: "analytics", href: "#" },
];

export function ContactsSidebar({ onAdd }: { onAdd: () => void }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-slate-100 bg-white px-3 py-4 shadow-[0_1px_8px_rgba(15,23,42,0.04)] lg:flex">
      <div>
        <Link href="/dashboard" className="mb-5 flex items-center gap-2 px-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white shadow-sm">✓</span>
          <span><strong className="block text-sm font-bold tracking-tight">Follow-up Board</strong><small className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">CRM & Pipeline</small></span>
        </Link>
        <button onClick={onAdd} className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-dark">
          <ContactIcon name="add" className="h-4 w-4" />New Contact
        </button>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Main Menu</p>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold ${item.active ? "bg-panel-strong text-brand" : "text-slate-600 hover:bg-panel-soft hover:text-ink"}`}>
              <ContactIcon name={item.icon} className="h-[18px] w-[18px]" />{item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">System</p>
        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-panel-soft"><ContactIcon name="settings" className="h-[18px] w-[18px]" />Settings</a>
        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-panel-soft"><ContactIcon name="help" className="h-[18px] w-[18px]" />Help & Docs</a>
        <SignOutButton />
      </div>
    </aside>
  );
}

export function ContactsTopbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-100 bg-white/90 px-4 backdrop-blur-xl lg:left-64 lg:px-8">
      <button aria-label="Open navigation" className="rounded-lg p-2 text-slate-600 lg:hidden"><ContactIcon name="menu" /></button>
      <div className="flex max-w-md flex-1 items-center gap-2 rounded-lg bg-panel-soft px-3 py-2 text-slate-500"><ContactIcon name="search" className="h-4 w-4" /><span className="text-xs">Search contacts, deals, notes...</span><kbd className="ml-auto rounded bg-white px-1.5 py-0.5 text-[10px] shadow-sm">⌘K</kbd></div>
      <div className="ml-auto flex items-center gap-3">
        <span className="hidden items-center gap-1.5 text-xs text-slate-600 xl:flex"><ContactIcon name="calendar" className="h-4 w-4" />Today, 24 Oct</span>
        <button className="hidden items-center gap-1.5 rounded-lg bg-panel-soft px-3 py-2 text-xs font-semibold sm:flex"><ContactIcon name="download" className="h-4 w-4" />Export</button>
        <button aria-label="Notifications" className="relative rounded-lg p-2 text-slate-600"><ContactIcon name="bell" /><span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white" /></button>
        <div className="flex items-center gap-2 border-l border-slate-100 pl-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-brand">VN</span><span className="hidden md:block"><strong className="block text-xs">วาริสา นิลประภา</strong><small className="block text-[10px] text-slate-500">Sales Lead / Admin</small></span></div>
      </div>
    </header>
  );
}
