import { NextResponse } from "next/server";
import { getCurrentSession } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import { parseContactDraft, toContact } from "@/features/contacts/server";

export async function GET() {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ message: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  const contacts = await prisma.contact.findMany({
    where: { userId: session.user.id },
    orderBy: [{ followUpDate: "asc" }, { createdAt: "desc" }],
  });

  return NextResponse.json(contacts.map(toContact));
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ message: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  const draft = parseContactDraft(await request.json());
  if (!draft) return NextResponse.json({ message: "ข้อมูลผู้ติดต่อไม่ถูกต้อง" }, { status: 400 });

  const contact = await prisma.contact.create({
    data: {
      ...draft,
      followUpDate: new Date(`${draft.followUpDate}T00:00:00Z`),
      userId: session.user.id,
    },
  });

  return NextResponse.json(toContact(contact), { status: 201 });
}
