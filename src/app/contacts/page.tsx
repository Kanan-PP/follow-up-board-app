"use client";

import { useEffect, useMemo, useState } from "react";
import { ContactIcon } from "@/features/contacts/components/contact-icon";
import { ContactModal } from "@/features/contacts/components/contact-modal";
import { ContactsSidebar, ContactsTopbar } from "@/features/contacts/components/contacts-layout";
import { ContactsTable } from "@/features/contacts/components/contacts-table";
import { DeleteContactDialog } from "@/features/contacts/components/delete-contact-dialog";
import type { Contact, ContactDraft, ContactStatus } from "@/features/contacts/types";

type ContactEditor = string | "new" | null;
type StatusFilter = "ทั้งหมด" | ContactStatus;

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("ทั้งหมด");
  const [editingId, setEditingId] = useState<ContactEditor>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    async function loadContacts() {
      try {
        const response = await fetch("/api/contacts");
        if (!response.ok) throw new Error("โหลดข้อมูลผู้ติดต่อไม่สำเร็จ");
        setContacts(await response.json() as Contact[]);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "เกิดข้อผิดพลาด");
      } finally {
        setLoading(false);
      }
    }

    void loadContacts();
  }, []);

  const editingContact = editingId === "new" ? null : contacts.find((contact) => contact.id === editingId);
  const filteredContacts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return contacts.filter((contact) => {
      const matchesSearch = !term || [contact.name, contact.company, contact.email, contact.phone].some((value) => value.toLowerCase().includes(term));
      const matchesStatus = status === "ทั้งหมด" || contact.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [contacts, search, status]);

  const stats = [
    { label: "ผู้ติดต่อทั้งหมด", value: contacts.length, detail: "Database records", color: "text-ink" },
    { label: "ต้องติดตามวันนี้", value: contacts.filter((contact) => contact.followUpDate === "2024-10-24").length, detail: "24 ต.ค. 2024", color: "text-brand" },
    { label: "กำลังคุย", value: contacts.filter((contact) => contact.status === "กำลังคุย").length, detail: "อยู่ใน Pipeline", color: "text-amber-600" },
    { label: "ปิดงาน", value: contacts.filter((contact) => contact.status === "ปิดงาน").length, detail: "ดำเนินการสำเร็จ", color: "text-teal" },
  ];

  async function saveContact(draft: ContactDraft) {
    const isNew = editingId === "new";
    const response = await fetch(isNew ? "/api/contacts" : `/api/contacts/${editingId}`, {
      method: isNew ? "POST" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    if (!response.ok) {
      setError("บันทึกข้อมูลผู้ติดต่อไม่สำเร็จ");
      return;
    }

    const savedContact = await response.json() as Contact;
    setContacts((current) => isNew
      ? [savedContact, ...current]
      : current.map((contact) => contact.id === savedContact.id ? savedContact : contact));
    setError("");
    setEditingId(null);
  }

  async function removeContact() {
    if (deletingId === null) return;
    const response = await fetch(`/api/contacts/${deletingId}`, { method: "DELETE" });
    if (!response.ok) {
      setError("ลบข้อมูลผู้ติดต่อไม่สำเร็จ");
      return;
    }

    setContacts((current) => current.filter((contact) => contact.id !== deletingId));
    setError("");
    setDeletingId(null);
  }

  return (
    <div className="min-h-screen bg-app-bg">
      <ContactsSidebar onAdd={() => setEditingId("new")} />
      <ContactsTopbar />
      <main className="pt-16 lg:pl-64">
        <div className="mx-auto max-w-[1700px] p-4 sm:p-6 lg:p-8">
          <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <article key={item.label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p><div className="mt-1 flex items-baseline gap-2"><strong className={`text-3xl ${item.color}`}>{item.value}</strong><span className="text-[10px] text-slate-500">{item.detail}</span></div></div>
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-panel-soft ${item.color}`}><ContactIcon name={index === 1 ? "calendar" : "contacts"} /></span>
              </article>
            ))}
          </section>

          <section className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            {error && <p role="alert" className="border-b border-rose-200 bg-rose-50 px-5 py-3 text-xs text-rose-700">{error}</p>}
            <div className="p-4 sm:p-5">
              <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
                <div className="flex flex-wrap items-center gap-2"><h1 className="text-xl font-bold tracking-tight sm:text-2xl">รายชื่อผู้ติดต่อทั้งหมด</h1><span className="text-sm text-slate-500">(All Contacts)</span><span className="rounded-full bg-panel-muted px-2.5 py-1 text-[10px] font-bold text-brand">{contacts.length} รายชื่อ</span></div>
                <div className="flex flex-wrap gap-2"><button className="rounded-lg bg-panel-soft px-3 py-2.5 text-xs font-semibold">กรองขั้นสูง</button><button className="rounded-lg bg-panel-soft px-3 py-2.5 text-xs font-semibold">นำเข้า/ส่งออก</button><button onClick={() => setEditingId("new")} className="flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-dark"><ContactIcon name="add" className="h-4 w-4" />เพิ่มผู้ติดต่อใหม่</button></div>
              </div>
              <div className="mt-4 grid gap-2 rounded-lg bg-app-bg p-2 md:grid-cols-2 xl:grid-cols-6">
                <label className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm xl:col-span-2"><ContactIcon name="search" className="h-4 w-4 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} className="min-w-0 flex-1 bg-transparent text-xs outline-none" placeholder="ค้นหาชื่อ, บริษัท, อีเมล, เบอร์โทร..." />{search && <button onClick={() => setSearch("")} className="text-slate-400">×</button>}</label>
                <label className="rounded-lg bg-white px-3 py-1.5 shadow-sm"><span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">สถานะ</span><select value={status} onChange={(event) => setStatus(event.target.value as StatusFilter)} className="w-full bg-transparent text-xs font-semibold outline-none"><option>ทั้งหมด</option><option>รายการใหม่</option><option>กำลังคุย</option><option>ปิดงาน</option></select></label>
                <FilterPlaceholder label="ช่วงเวลาติดตาม" value="ทั้งหมด" />
                <FilterPlaceholder label="ช่องทาง" value="ทุกช่องทาง" />
                <FilterPlaceholder label="เรียงลำดับ" value="วันที่ต้องติดตาม" />
              </div>
            </div>
            {loading ? <div className="py-16 text-center text-sm text-slate-500">กำลังโหลดข้อมูลผู้ติดต่อ...</div> : <ContactsTable contacts={filteredContacts} total={contacts.length} onEdit={setEditingId} onDelete={setDeletingId} />}
          </section>
        </div>
      </main>

      {editingId !== null && <ContactModal key={editingId} contact={editingContact} onClose={() => setEditingId(null)} onSave={saveContact} />}
      {deletingId !== null && <DeleteContactDialog onCancel={() => setDeletingId(null)} onConfirm={removeContact} />}
    </div>
  );
}

function FilterPlaceholder({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg bg-white px-3 py-1.5 shadow-sm"><span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</span><strong className="text-xs">{value}</strong></div>;
}
