import "server-only";

import type { Contact as PrismaContact } from "@/generated/prisma/client";
import type { Contact, ContactDraft, ContactStatus } from "./types";

const contactStatuses = new Set<ContactStatus>(["รายการใหม่", "กำลังคุย", "ปิดงาน"]);

export function parseContactDraft(value: unknown): ContactDraft | null {
  if (!value || typeof value !== "object") return null;

  const input = value as Record<string, unknown>;
  const fields = ["name", "company", "email", "phone", "channel", "interest", "status", "followUpDate", "notes"] as const;
  if (fields.some((field) => typeof input[field] !== "string")) return null;

  const draft = Object.fromEntries(fields.map((field) => [field, (input[field] as string).trim()])) as ContactDraft;
  if (!draft.name || !draft.company || !draft.email || !draft.phone || !draft.channel || !draft.interest || !draft.followUpDate) return null;
  if (!contactStatuses.has(draft.status)) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(draft.followUpDate) || Number.isNaN(Date.parse(`${draft.followUpDate}T00:00:00Z`))) return null;

  return draft;
}

export function toContact(record: PrismaContact): Contact {
  return {
    id: record.id,
    name: record.name,
    company: record.company,
    email: record.email,
    phone: record.phone,
    channel: record.channel,
    interest: record.interest,
    status: record.status as ContactStatus,
    followUpDate: record.followUpDate.toISOString().slice(0, 10),
    notes: record.notes,
  };
}
