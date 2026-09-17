export type ContactStatus = "รายการใหม่" | "กำลังคุย" | "ปิดงาน";

export type Contact = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  channel: string;
  interest: string;
  status: ContactStatus;
  followUpDate: string;
  notes: string;
};

export type ContactDraft = Omit<Contact, "id">;
