import type { Contact, ContactStatus } from "../types";
import { ContactIcon } from "./contact-icon";

const statusStyle: Record<ContactStatus, string> = {
  "รายการใหม่": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "กำลังคุย": "bg-amber-50 text-amber-700 ring-amber-200",
  "ปิดงาน": "bg-teal-50 text-teal-700 ring-teal-200",
};

const dateFormatter = new Intl.DateTimeFormat("th-TH", { day: "numeric", month: "short", year: "numeric" });

export function ContactsTable({ contacts, total, onEdit, onDelete }: { contacts: Contact[]; total: number; onEdit: (id: string) => void; onDelete: (id: string) => void }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1150px] border-collapse text-left">
          <thead className="border-y border-slate-200 bg-panel-soft/70 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <tr><th className="px-5 py-3">ชื่อ / บริษัท</th><th className="px-3 py-3">ข้อมูลติดต่อ</th><th className="px-3 py-3">ช่องทาง</th><th className="px-3 py-3">สิ่งที่สนใจ</th><th className="px-3 py-3">สถานะ</th><th className="px-3 py-3">Follow-up</th><th className="px-3 py-3">หมายเหตุ</th><th className="px-5 py-3 text-right">จัดการ</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {contacts.map((contact) => (
              <tr key={contact.id} className="group hover:bg-panel-soft/50">
                <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-panel-strong text-xs font-bold text-brand">{contact.name.replace("คุณ", "").slice(0, 2)}</span><div><strong className="block text-xs">{contact.name}</strong><span className="text-[10px] text-slate-500">{contact.company}</span></div></div></td>
                <td className="px-3 py-4"><span className="block text-[11px]">{contact.email}</span><span className="mt-0.5 block text-[10px] text-slate-500">{contact.phone}</span></td>
                <td className="px-3 py-4 text-[11px] font-semibold">{contact.channel}</td>
                <td className="px-3 py-4 text-[11px] text-slate-600">{contact.interest}</td>
                <td className="px-3 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ring-inset ${statusStyle[contact.status]}`}>{contact.status}</span></td>
                <td className="px-3 py-4"><span className="flex items-center gap-1.5 text-[11px] font-semibold"><ContactIcon name="calendar" className="h-3.5 w-3.5 text-brand" />{dateFormatter.format(new Date(`${contact.followUpDate}T00:00:00`))}</span></td>
                <td className="max-w-[240px] px-3 py-4"><p className="line-clamp-2 text-[10px] leading-4 text-slate-500">{contact.notes}</p></td>
                <td className="px-5 py-4"><div className="flex justify-end gap-1"><button aria-label={`แก้ไข ${contact.name}`} onClick={() => onEdit(contact.id)} className="rounded-lg p-2 text-slate-500 hover:bg-panel-muted hover:text-brand"><ContactIcon name="edit" className="h-4 w-4" /></button><button aria-label={`ลบ ${contact.name}`} onClick={() => onDelete(contact.id)} className="rounded-lg p-2 text-slate-500 hover:bg-rose-50 hover:text-danger"><ContactIcon name="delete" className="h-4 w-4" /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
        {contacts.length === 0 && <div className="py-16 text-center"><p className="text-sm font-semibold">ไม่พบผู้ติดต่อ</p><p className="mt-1 text-xs text-slate-500">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p></div>}
      </div>
      <footer className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 text-[11px] text-slate-500 sm:flex-row sm:items-center">
        <span>แสดง <strong className="text-ink">{contacts.length}</strong> จากทั้งหมด <strong className="text-ink">{total}</strong> รายชื่อ</span>
        <div className="flex gap-1"><button disabled className="h-8 w-8 rounded-lg bg-panel-soft text-slate-300">‹</button><button className="h-8 w-8 rounded-lg bg-brand font-bold text-white">1</button><button disabled className="h-8 w-8 rounded-lg bg-panel-soft text-slate-300">›</button></div>
      </footer>
    </>
  );
}
