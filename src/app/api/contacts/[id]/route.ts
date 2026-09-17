import { NextResponse } from "next/server";
import { getCurrentSession } from "@/lib/auth-session";
import { prisma } from "@/lib/prisma";
import { parseContactDraft, toContact } from "@/features/contacts/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ message: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  const { id } = await context.params;
  const draft = parseContactDraft(await request.json());
  if (!draft) return NextResponse.json({ message: "ข้อมูลผู้ติดต่อไม่ถูกต้อง" }, { status: 400 });

  const result = await prisma.contact.updateMany({
    where: { id, userId: session.user.id },
    data: { ...draft, followUpDate: new Date(`${draft.followUpDate}T00:00:00Z`) },
  });
  if (result.count === 0) return NextResponse.json({ message: "ไม่พบผู้ติดต่อ" }, { status: 404 });

  const contact = await prisma.contact.findFirstOrThrow({ where: { id, userId: session.user.id } });
  return NextResponse.json(toContact(contact));
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ message: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  const { id } = await context.params;
  const result = await prisma.contact.deleteMany({ where: { id, userId: session.user.id } });
  if (result.count === 0) return NextResponse.json({ message: "ไม่พบผู้ติดต่อ" }, { status: 404 });

  return new Response(null, { status: 204 });
}
