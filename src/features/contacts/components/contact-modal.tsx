"use client";

import { useState, type FormEvent } from "react";
import { emptyContact } from "../mock-data";
import type { Contact, ContactDraft } from "../types";

const inputClassName = "mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-indigo-100";

function toDraft(contact: Contact): ContactDraft {
  return {
    name: contact.name,
    company: contact.company,
    email: contact.email,
    phone: contact.phone,
    channel: contact.channel,
    interest: contact.interest,
    status: contact.status,
    followUpDate: contact.followUpDate,
    notes: contact.notes,
  };
}

export function ContactModal({ contact, onClose, onSave }: { contact?: Contact | null; onClose: () => void; onSave: (contact: ContactDraft) => void }) {
  const [draft, setDraft] = useState<ContactDraft>(contact ? toDraft(contact) : emptyContact);
  const updateField = (key: keyof ContactDraft, value: string) => setDraft((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSave(draft);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-start justify-between">
          <div><h2 id="contact-modal-title" className="text-xl font-bold">{contact ? "แก้ไขผู้ติดต่อ" : "เพิ่มผู้ติดต่อใหม่"}</h2><p className="mt-1 text-xs text-slate-500">กรอกข้อมูลผู้ติดต่อสำหรับการติดตาม</p></div>
          <button type="button" onClick={onClose} className="rounded-lg px-2 py-1 text-xl text-slate-400 hover:bg-slate-100">×</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-semibold">ชื่อ<input required value={draft.name} onChange={(event) => updateField("name", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold">บริษัทหรือองค์กร<input required value={draft.company} onChange={(event) => updateField("company", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold">อีเมล<input type="email" required value={draft.email} onChange={(event) => updateField("email", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold">เบอร์โทรศัพท์<input required value={draft.phone} onChange={(event) => updateField("phone", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold">ช่องทางการติดต่อ<select value={draft.channel} onChange={(event) => updateField("channel", event.target.value)} className={`${inputClassName} bg-white`}><option>โทรศัพท์</option><option>อีเมล</option><option>LINE</option><option>WhatsApp</option></select></label>
          <label className="text-xs font-semibold">สิ่งที่สนใจ<input required value={draft.interest} onChange={(event) => updateField("interest", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold">สถานะ<select value={draft.status} onChange={(event) => updateField("status", event.target.value)} className={`${inputClassName} bg-white`}><option>รายการใหม่</option><option>กำลังคุย</option><option>ปิดงาน</option></select></label>
          <label className="text-xs font-semibold">วันที่ต้อง Follow-up<input type="date" required value={draft.followUpDate} onChange={(event) => updateField("followUpDate", event.target.value)} className={inputClassName} /></label>
          <label className="text-xs font-semibold sm:col-span-2">หมายเหตุ<textarea rows={3} value={draft.notes} onChange={(event) => updateField("notes", event.target.value)} className={`${inputClassName} resize-none`} /></label>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold">ยกเลิก</button>
          <button type="submit" className="rounded-lg bg-brand px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark">{contact ? "บันทึกการแก้ไข" : "เพิ่มผู้ติดต่อ"}</button>
        </div>
      </form>
    </div>
  );
}
