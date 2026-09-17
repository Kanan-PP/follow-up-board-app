import Link from "next/link";
import type { ReactNode } from "react";
import { SignOutButton } from "@/components/auth/sign-out-button";

type IconName =
  | "add"
  | "analytics"
  | "arrow"
  | "bell"
  | "calendar"
  | "check"
  | "contacts"
  | "dashboard"
  | "download"
  | "help"
  | "mail"
  | "menu"
  | "phone"
  | "pipeline"
  | "search"
  | "settings"
  | "tasks"
  | "trend";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    add: <path d="M12 5v14M5 12h14" />,
    analytics: <><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-7" /><path d="M22 19H2" /></>,
    arrow: <><path d="m9 18 6-6-6-6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    contacts: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.7 2.2c-.8.45-1.2.8-1.2 1.8M12 17h.01" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.3 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />,
    pipeline: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="m8 7 3 9M16 7l-3 9" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.08A1.7 1.7 0 0 0 8.95 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.53-1H3v-4h.08A1.7 1.7 0 0 0 4.6 8.95a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8.95 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08a1.7 1.7 0 0 0 1.05 1.53 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" /></>,
    tasks: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="m8 12 2 2 5-5" /></>,
    trend: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  };

  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

const navItems: { label: string; icon: IconName; href: string; active?: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard", active: true },
  { label: "Contacts", icon: "contacts", href: "/contacts" },
  { label: "Tasks & Follow-ups", icon: "tasks", href: "#" },
  { label: "Analytics & Reports", icon: "analytics", href: "#" },
];

const metrics = [
  { label: "ผู้ติดต่อทั้งหมด (TOTAL)", value: "1,248", suffix: "ราย", icon: "contacts" as IconName, detail: "+12.4%", note: "เทียบจากเดือนก่อนหน้า", tone: "text-teal" },
  { label: "ต้องติดตามวันนี้ (TODAY)", value: "8", suffix: "รายการที่นัดหมาย", icon: "calendar" as IconName, detail: "สำคัญเร่งด่วน 3 ราย", note: "ตรงกำหนด 5 ราย", tone: "text-blue" },
  { label: "อยู่ระหว่างเจรจา (IN PIPELINE)", value: "42", suffix: "เคสเจรจา", icon: "pipeline" as IconName, detail: "78.5%", note: "อัตราการตอบกลับเฉลี่ย", tone: "text-teal" },
  { label: "ปิดการขายสำเร็จ (WON DEALS)", value: "315", suffix: "สัญญาลุล่วง", icon: "check" as IconName, detail: "฿4,820,000", note: "เป้า 104%", tone: "text-brand" },
];

const followUps = [
  { name: "คุณอรอนงค์ ศรีสุข", company: "UrbanSpace Thailand", status: "สนใจมาก (Hot Lead)", task: "นำเสนอแพ็กเกจ Membership Enterprise สำหรับสาขาใหม่ สีลม–สาทร", time: "10:30 น.", contact: "081-234-5678", action: "โทรออก", icon: "phone" as IconName, border: "border-danger", badge: "bg-rose-50 text-rose-700" },
  { name: "คุณพิมลภัส วัฒนเมธา", company: "TechVanguard Co., Ltd.", status: "รอติดต่อกลับ", task: "ส่งตัวอย่างร่างสัญญา NDA และเอกสาร Security Compliance หลังจบ Live Demo", time: "13:45 น.", contact: "pimlapas@techvan.co", action: "ส่งอีเมลตอบกลับ", icon: "mail" as IconName, border: "border-blue", badge: "bg-blue-50 text-blue-700" },
  { name: "คุณธนพล รุ่งเรืองกิจ", company: "Siam Retail Hub", status: "กำลังเจรจาต่อรอง", task: "อัปเดตสิทธิประโยชน์แพ็กเกจ Enterprise Solution สาขาขอนแก่นและเชียงใหม่", time: "15:00 น.", contact: "LINE: @tanapol_biz", action: "เปิด LINE Chat", icon: "mail" as IconName, border: "border-teal", badge: "bg-teal-50 text-teal-700" },
  { name: "ดร.สมชาย เวชศาสตร์", company: "Bangkok Health Lab", status: "นัดหมายล่วงหน้า", task: "ติดตามผลการพิจารณาอนุมัติงบประมาณฝ่ายจัดซื้ออุปกรณ์ Lab ประจำ Q4/2024", time: "16:30 น.", contact: "089-876-5432", action: "โทรออก", icon: "phone" as IconName, border: "border-slate-300", badge: "bg-slate-100 text-slate-600" },
];

const pipeline = [
  { label: "ลูกค้าใหม่ (New Leads)", value: "185", percent: "15%", color: "bg-blue" },
  { label: "กำลังเจรจา / ติดต่อ (In Progress)", value: "412", percent: "33%", color: "bg-brand" },
  { label: "รอนัดติดตามผล (Follow-up Needed)", value: "94", percent: "8%", color: "bg-sky-500" },
  { label: "ปิดการขายสำเร็จ (Won Deals)", value: "438", percent: "35%", color: "bg-teal" },
  { label: "ยกเลิก / พักโครงการ (Lost/Inactive)", value: "119", percent: "9%", color: "bg-slate-300" },
];

const activities = [
  { title: "บันทึกการโทรศัพท์", time: "10 นาทีที่แล้ว", detail: "คุยกับคุณธัญรัตน์ (K-Logistics) สรุปข้อตกลงและนัดส่งใบเสนอราคาใหม่", color: "bg-indigo-100 text-brand" },
  { title: "ปิดการขายสัญญา #TH-902", time: "42 นาทีที่แล้ว", detail: "โดย คุณภาคิน ท. ยอดรวม ฿320,000 (Standard Plan 1 ปี)", color: "bg-teal-100 text-teal" },
  { title: "ลูกค้าเปิดอ่านอีเมลเสนอราคา", time: "1 ชม. ที่แล้ว", detail: "คุณนวพล (Metro Retail) เปิดอ่านเอกสารรอบที่ 3", color: "bg-blue-100 text-blue" },
  { title: "เลื่อนนัดหมายประชุม", time: "2 ชม. ที่แล้ว", detail: "คุณอานนท์ ขอเลื่อนนัด On-site visit เป็นวันจันทร์หน้าเวลา 14:00 น.", color: "bg-slate-100 text-slate-500" },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col justify-between border-r border-slate-100 bg-white px-3 py-4 shadow-[0_1px_8px_rgba(15,23,42,0.04)] lg:flex">
      <div>
        <Link href="/dashboard" className="mb-5 flex items-center gap-2 px-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white shadow-sm"><Icon name="check" /></span>
          <span><strong className="block text-sm font-bold tracking-tight">Follow-up Board</strong><small className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">CRM & Pipeline</small></span>
        </Link>
        <button className="mb-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-dark"><Icon name="add" className="h-4 w-4" /> New Contact</button>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Main Menu</p>
        <nav className="space-y-1">
          {navItems.map((item) => <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${item.active ? "bg-panel-strong text-brand" : "text-slate-600 hover:bg-panel-soft hover:text-ink"}`}><Icon name={item.icon} className="h-4.5 w-4.5" />{item.label}</Link>)}
        </nav>
      </div>
      <div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">System</p>
        <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-panel-soft"><Icon name="settings" className="h-4.5 w-4.5" />Settings</Link>
        <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-panel-soft"><Icon name="help" className="h-4.5 w-4.5" />Help & Docs</Link>
        <SignOutButton />
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center gap-4 border-b border-slate-100 bg-white/90 px-4 backdrop-blur-xl lg:left-64 lg:px-8">
      <button aria-label="Open navigation" className="rounded-lg p-2 text-slate-600 lg:hidden"><Icon name="menu" /></button>
      <div className="flex max-w-md flex-1 items-center gap-2 rounded-lg bg-panel-soft px-3 py-2 text-slate-500"><Icon name="search" className="h-4 w-4" /><input aria-label="Search" className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-slate-400" placeholder="Search contacts, deals, notes..." /><kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] shadow-sm">⌘K</kbd></div>
      <div className="ml-auto flex items-center gap-3">
        <span className="hidden items-center gap-1.5 text-xs text-slate-600 xl:flex"><Icon name="calendar" className="h-4 w-4" />Today, 24 Oct</span>
        <button className="hidden items-center gap-1.5 rounded-lg bg-panel-soft px-3 py-2 text-xs font-semibold sm:flex"><Icon name="download" className="h-4 w-4" />Export</button>
        <button aria-label="Notifications" className="relative rounded-lg p-2 text-slate-600"><Icon name="bell" /><span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white" /></button>
        <div className="flex items-center gap-2 border-l border-slate-100 pl-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-linear-to-br from-indigo-200 to-blue-200 text-xs font-bold text-brand">VN</span><span className="hidden text-left md:block"><strong className="block text-xs">วาริสา นิลประภา</strong><small className="block text-[10px] text-slate-500">Sales Lead / Admin</small></span></div>
      </div>
    </header>
  );
}

function MetricCard({ item }: { item: (typeof metrics)[number] }) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">{item.label}</span><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-panel-soft ${item.tone}`}><Icon name={item.icon} className="h-4 w-4" /></span></div>
      <div className="flex items-baseline gap-2"><strong className="text-3xl tracking-tight text-ink">{item.value}</strong><span className="text-xs text-slate-500">{item.suffix}</span></div>
      <div className="mt-3 flex flex-wrap items-center gap-2"><span className={`text-[11px] font-bold ${item.tone}`}>{item.detail}</span><span className="text-[11px] text-slate-500">{item.note}</span></div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-panel-soft"><div className="h-full w-[72%] rounded-full bg-current text-brand" /></div>
    </article>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-app-bg">
      <Sidebar />
      <Topbar />
      <main className="pt-16 lg:pl-64">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 p-4 sm:p-6 lg:p-8">
          <section className="relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />
            <div className="relative flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
              <div><div className="flex flex-wrap items-center gap-3"><h1 className="text-xl font-bold tracking-tight sm:text-2xl">ยินดีต้อนรับกลับ, คุณวาริสา 👋</h1><span className="inline-flex items-center gap-1.5 rounded-full bg-panel-strong px-2.5 py-1 text-[10px] font-semibold text-slate-600"><span className="h-2 w-2 animate-pulse rounded-full bg-teal" />ระบบทำงานปกติ</span></div><p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500"><Icon name="calendar" className="h-4 w-4 text-blue" />วันพฤหัสบดีที่ 24 ตุลาคม 2024 • Pipeline Cycle Q4 (สัปดาห์ที่ 4)</p></div>
              <div className="flex flex-wrap gap-2"><button className="flex items-center gap-2 rounded-lg bg-panel-soft px-4 py-2.5 text-xs font-semibold shadow-sm"><Icon name="download" className="h-4 w-4" />ส่งออกรายงาน (CSV)</button><button className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-brand-dark"><Icon name="add" className="h-4 w-4" />เพิ่มรายชื่อด่วน</button></div>
            </div>
          </section>

          <section aria-label="Key metrics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((item) => <MetricCard key={item.label} item={item} />)}</section>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
            <section className="xl:col-span-8">
              <div className="mb-3 flex flex-col justify-between gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-100 text-blue"><Icon name="calendar" className="h-5 w-5" /></span><div><h2 className="text-sm font-bold">รายการที่ต้องติดตามวันนี้ (Today&apos;s Follow-ups)</h2><p className="mt-0.5 text-[11px] text-slate-500">เรียงตามระดับความสำคัญและเวลานัดหมาย</p></div></div>
                <div className="flex gap-1 rounded-lg bg-panel-soft p-1 text-[11px] font-semibold"><button className="rounded-md bg-white px-3 py-1.5 text-brand shadow-sm">ทั้งหมด (8)</button><button className="px-3 py-1.5 text-slate-500">โทร (3)</button><button className="px-3 py-1.5 text-slate-500">อีเมล (4)</button></div>
              </div>
              <div className="space-y-3">
                {followUps.map((item) => (
                  <article key={item.name} className={`rounded-xl border border-slate-100 border-l-4 ${item.border} bg-white p-4 shadow-sm transition hover:shadow-md`}>
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div className="flex min-w-0 gap-3"><button aria-label={`Mark ${item.name} complete`} className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-panel-strong text-transparent hover:text-slate-500"><Icon name="check" className="h-3.5 w-3.5" /></button><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><strong className="text-sm">{item.name}</strong><span className="rounded-full bg-panel-strong px-2 py-0.5 text-[10px] font-semibold">{item.company}</span><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${item.badge}`}>{item.status}</span></div><p className="mt-1.5 text-xs leading-5 text-slate-700">{item.task}</p></div></div>
                      <span className="shrink-0 rounded-lg bg-panel-soft px-2.5 py-1.5 text-[11px] font-semibold">{item.time}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3"><span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600"><Icon name={item.icon} className="h-3.5 w-3.5 text-brand" />{item.contact}</span><button className="flex items-center gap-1.5 rounded-lg bg-panel-soft px-3 py-1.5 text-[11px] font-semibold hover:bg-panel-muted"><Icon name={item.icon} className="h-3.5 w-3.5" />{item.action}</button></div>
                  </article>
                ))}
              </div>
              <div className="mt-3 flex flex-col justify-between gap-2 rounded-xl bg-panel-soft/80 p-4 text-[11px] text-slate-600 sm:flex-row sm:items-center"><span className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-teal-100 text-teal"><Icon name="check" className="h-3 w-3" /></span>ทำเสร็จแล้ว 0 จาก 8 ภารกิจของวันนี้</span><button className="font-bold text-brand">ดูงานที่ค้างทั้งหมดในสัปดาห์นี้ →</button></div>
            </section>

            <aside className="space-y-6 xl:col-span-4">
              <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-bold"><Icon name="pipeline" className="h-5 w-5 text-brand" />สรุปสถานะผู้ติดต่อ</h2><span className="text-[11px] text-slate-500">1,248 ทั้งหมด</span></div>
                <div className="mb-5 flex h-3 overflow-hidden rounded-full bg-panel-strong">{pipeline.map((item) => <div key={item.label} className={item.color} style={{ width: item.percent }} />)}</div>
                <div className="space-y-3">{pipeline.map((item) => <div key={item.label} className="flex items-center justify-between gap-3 text-[11px]"><span className="flex min-w-0 items-center gap-2"><span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} /><span className="truncate text-slate-600">{item.label}</span></span><span className="shrink-0 font-bold">{item.value} <small className="font-normal text-slate-400">({item.percent})</small></span></div>)}</div>
                <button className="mt-5 flex w-full items-center justify-center gap-1 rounded-lg bg-panel-soft py-2.5 text-[11px] font-semibold">เปิดดูมุมมอง Pipeline Kanban <Icon name="arrow" className="h-3.5 w-3.5" /></button>
              </section>

              <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-bold"><Icon name="trend" className="h-5 w-5 text-blue" />กิจกรรมล่าสุด</h2><button className="text-[10px] font-semibold text-slate-500">รีเฟรช</button></div>
                <div className="relative space-y-5 pl-7 before:absolute before:bottom-2 before:left-2.25 before:top-2 before:w-px before:bg-slate-200">{activities.map((item) => <article key={item.title} className="relative"><span className={`absolute -left-7 top-0 grid h-5 w-5 place-items-center rounded-full ring-4 ring-white ${item.color}`}><span className="h-1.5 w-1.5 rounded-full bg-current" /></span><div className="flex items-baseline justify-between gap-2"><strong className="text-[11px]">{item.title}</strong><time className="shrink-0 text-[9px] text-slate-400">{item.time}</time></div><p className="mt-1 text-[10px] leading-4 text-slate-500">{item.detail}</p></article>)}</div>
                <button className="mt-5 flex w-full items-center justify-center gap-1 text-[11px] font-semibold text-brand">ดูประวัติบันทึกกิจกรรมทั้งหมด <Icon name="arrow" className="h-3 w-3" /></button>
              </section>

              <section className="overflow-hidden rounded-xl bg-linear-to-br from-brand to-brand-dark p-5 text-white shadow-md"><div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-indigo-100"><span>เป้าหมายประจำวัน</span><span className="rounded bg-white/15 px-2 py-1">18 / 25 Calls</span></div><h2 className="mt-3 text-sm font-bold">เป้าหมายการโทรติดตามประจำวัน</h2><p className="mt-1 text-[11px] leading-5 text-indigo-100">เหลืออีก 7 การโทรเพื่อพิชิตเป้าหมายรายวันของทีม Sales Lead</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-black/20"><div className="h-full w-[72%] rounded-full bg-white" /></div></section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
