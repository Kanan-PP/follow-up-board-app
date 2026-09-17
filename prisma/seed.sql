INSERT INTO "contact" (
  "id", "name", "company", "email", "phone", "channel", "interest",
  "status", "followUpDate", "notes", "createdAt", "updatedAt", "userId"
)
SELECT
  'seed-' || md5(u."id" || seed.email),
  seed.name,
  seed.company,
  seed.email,
  seed.phone,
  seed.channel,
  seed.interest,
  seed.status,
  seed.follow_up_date::date,
  seed.notes,
  NOW(),
  NOW(),
  u."id"
FROM "user" AS u
CROSS JOIN (
  VALUES
    ('คุณอรอนงค์ ศรีสุข', 'UrbanSpace Thailand', 'oranong@urbanspace.co.th', '081-234-5678', 'โทรศัพท์', 'Enterprise Membership', 'กำลังคุย', '2024-10-24', 'รอนัดนำเสนอแพ็กเกจสำหรับสาขาใหม่ สีลม–สาทร'),
    ('คุณพิมลภัส วัฒนเมธา', 'TechVanguard Co., Ltd.', 'pimlapas@techvan.co', '02-118-4400', 'อีเมล', 'Security Compliance', 'กำลังคุย', '2024-10-24', 'ส่งร่างสัญญา NDA หลังจบ Live Demo'),
    ('คุณธนพล รุ่งเรืองกิจ', 'Siam Retail Hub', 'tanapol@siamretail.co.th', '089-555-7812', 'LINE', 'Enterprise Solution', 'กำลังคุย', '2024-10-25', 'อัปเดตแพ็กเกจสำหรับสาขาขอนแก่นและเชียงใหม่'),
    ('คุณนันทิชา เจริญทรัพย์', 'Apex Solutions', 'nanticha@apex.co.th', '086-321-4455', 'อีเมล', 'CRM Migration', 'รายการใหม่', '2024-10-26', 'ดาวน์โหลดเอกสารแนะนำผลิตภัณฑ์จากเว็บไซต์'),
    ('คุณภานุเดช วงศ์สว่าง', 'K-Logistics Express', 'panudech@klogistics.co.th', '02-779-1104', 'LINE', 'Logistics Platform', 'กำลังคุย', '2024-10-22', 'ติดตามการขยายเวลาสัญญาบริการขนส่ง'),
    ('คุณชลธิชา มหาสมุทร', 'Ocean Marine Tech', 'cholticha@oceanmarine.th', '086-777-8899', 'โทรศัพท์', 'Support Plan', 'ปิดงาน', '2024-11-01', 'เซ็นสัญญา 1 ปี เตรียมเริ่ม Onboarding'),
    ('คุณอรรถพล เจนจิรวัฒน์', 'Infinite Media Group', 'attapol@infinite.agency', '082-999-3322', 'อีเมล', 'Marketing Automation', 'รายการใหม่', '2024-10-28', 'รอผลประชุมบอร์ดก่อนเปิด PO สิ้นเดือน')
) AS seed(name, company, email, phone, channel, interest, status, follow_up_date, notes)
ON CONFLICT ("id") DO NOTHING;
