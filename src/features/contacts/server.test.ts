import { describe, test, expect, vi } from "vitest";
import { parseContactDraft, toContact } from "./server";
import type { ContactDraft } from "./types";
import type { Contact as PrismaContact } from "@/generated/prisma/client";

// จำลอง server-only module เพื่อให้สามารถรัน test ใน Vitest environment ได้
vi.mock("server-only", () => ({}));

describe("Contact Feature - Server Helpers", () => {
  describe("parseContactDraft", () => {
    const validDraft: ContactDraft = {
      name: "สมชาย ใจดี",
      company: "บริษัท เอบีซี จำกัด",
      email: "somchai@abc.com",
      phone: "081-234-5678",
      channel: "โทรศัพท์",
      interest: "Enterprise Membership",
      status: "กำลังคุย",
      followUpDate: "2024-10-24",
      notes: "นัดโทรติดตามผลสัปดาห์หน้า",
    };

    test("แปลงข้อมูลผู้ติดต่อที่ถูกต้องได้สำเร็จ", () => {
      const result = parseContactDraft(validDraft);
      expect(result).toEqual(validDraft);
    });

    test("ตัด whitespace ส่วนเกินของข้อมูลที่เป็น string (trim)", () => {
      const input = {
        ...validDraft,
        name: "  สมชาย ใจดี  ",
        company: "  บริษัท เอบีซี จำกัด ",
        notes: "  มีข้อความ  ",
      };
      const result = parseContactDraft(input);
      expect(result).not.toBeNull();
      expect(result?.name).toBe("สมชาย ใจดี");
      expect(result?.company).toBe("บริษัท เอบีซี จำกัด");
      expect(result?.notes).toBe("มีข้อความ");
    });

    test("คืนค่า null เมื่อข้อมูลไม่ใช่ object หรือเป็น null/undefined", () => {
      expect(parseContactDraft(null)).toBeNull();
      expect(parseContactDraft(undefined)).toBeNull();
      expect(parseContactDraft("string")).toBeNull();
      expect(parseContactDraft(123)).toBeNull();
    });

    test("คืนค่า null เมื่อฟิลด์จำเป็นขาดหายไปหรือเป็นค่าว่าง", () => {
      expect(parseContactDraft({ ...validDraft, name: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, company: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, email: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, phone: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, channel: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, interest: "" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, followUpDate: "" })).toBeNull();
    });

    test("คืนค่า null เมื่อสถานะ (status) ไม่ถูกต้อง", () => {
      const invalidStatus = {
        ...validDraft,
        status: "สถานะที่ไม่ถูกต้อง",
      };
      expect(parseContactDraft(invalidStatus)).toBeNull();
    });

    test("รองรับสถานะที่กำหนดทั้ง 3 สถานะ", () => {
      expect(parseContactDraft({ ...validDraft, status: "รายการใหม่" })?.status).toBe("รายการใหม่");
      expect(parseContactDraft({ ...validDraft, status: "กำลังคุย" })?.status).toBe("กำลังคุย");
      expect(parseContactDraft({ ...validDraft, status: "ปิดงาน" })?.status).toBe("ปิดงาน");
    });

    test("คืนค่า null เมื่อรูปแบบวันที่ followUpDate ไม่ถูกต้องตาม YYYY-MM-DD", () => {
      expect(parseContactDraft({ ...validDraft, followUpDate: "24-10-2024" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, followUpDate: "invalid-date" })).toBeNull();
      expect(parseContactDraft({ ...validDraft, followUpDate: "2024-99-99" })).toBeNull();
    });
  });

  describe("toContact", () => {
    test("แปลงข้อมูล PrismaContact เป็น Contact format ได้ถูกต้อง", () => {
      const prismaRecord: PrismaContact = {
        id: "c-123",
        name: "สมหญิง รักสงบ",
        company: "XYZ Corp",
        email: "somying@xyz.com",
        phone: "089-876-5432",
        channel: "LINE",
        interest: "Software Solution",
        status: "รายการใหม่",
        followUpDate: new Date("2024-10-25T00:00:00.000Z"),
        notes: "ติดต่อผ่าน LINE Official",
        userId: "user-456",
        createdAt: new Date("2024-10-01T10:00:00.000Z"),
        updatedAt: new Date("2024-10-01T10:00:00.000Z"),
      };

      const contact = toContact(prismaRecord);

      expect(contact).toEqual({
        id: "c-123",
        name: "สมหญิง รักสงบ",
        company: "XYZ Corp",
        email: "somying@xyz.com",
        phone: "089-876-5432",
        channel: "LINE",
        interest: "Software Solution",
        status: "รายการใหม่",
        followUpDate: "2024-10-25",
        notes: "ติดต่อผ่าน LINE Official",
      });
      // ต้องไม่มี userId ใน contact object ที่ส่งให้ client
      expect((contact as Record<string, unknown>).userId).toBeUndefined();
    });
  });
});
