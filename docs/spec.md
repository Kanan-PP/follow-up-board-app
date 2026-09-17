# Follow-up Board

web app สำหรับจัดการรายชื่อผู้มาติดต่อ สถานะ และวันติดตาม

## Tech Stack
- Next.js
- Typecript
- tailwindcss
- Prisma ใช้ PG Adaptor และ Client ด้วย
- Supabase PostgreSQL
- Better Auth
- Vitest ใช้ UI ด้วย

## Setup Roles
- ใช้ package เวอร์ชั่น stable ล่าสุด
- ห้ามใช้ beta , Canary หรือ Exprimental version
- หากจำเป็นต้องเพิ่ม package ให้ตรวจสอบความเข้ากันได้กับ Next.js

## Working Rule
- ทำเฉพาะงานที่ได้รับคำสั้งแต่ละครั้ง
- ห้ามเพิ่ม feater, logic หรือ UI ที่ไม่ได้ระบุ
- ห้ามแก้ไขส่วนที่ไม่เกี่ยวข้องกับงานเดิมที่มีอยู่
- หากข้อมูลไม่พอหรือจำเป็นต้องขยายขอบเขต ให้ถามก่อนทำ
- ไม่ต้อง npm run build และ npm run dev จะทดสอบเอง

## Access
- ถ้าจะเข้าดูหน้าภายในได้ ต้องเป็น User ที่ล๊อกอินอยู่เท่านั้น
- ผู้ใช้ที่ดู เพิ่มแก้ไข และลบได้เฉพาะข้อมูลของ contact ตัวเองเท่านั้น