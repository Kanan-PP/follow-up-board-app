import type { ContactDraft } from "./types";

export const seedContacts: ContactDraft[] = [
  { name: "คุณอรอนงค์ ศรีสุข", company: "UrbanSpace Thailand", email: "oranong@urbanspace.co.th", phone: "081-234-5678", channel: "โทรศัพท์", interest: "Enterprise Membership", status: "กำลังคุย", followUpDate: "2024-10-24", notes: "รอนัดนำเสนอแพ็กเกจสำหรับสาขาใหม่ สีลม–สาทร" },
  { name: "คุณพิมลภัส วัฒนเมธา", company: "TechVanguard Co., Ltd.", email: "pimlapas@techvan.co", phone: "02-118-4400", channel: "อีเมล", interest: "Security Compliance", status: "กำลังคุย", followUpDate: "2024-10-24", notes: "ส่งร่างสัญญา NDA หลังจบ Live Demo" },
  { name: "คุณธนพล รุ่งเรืองกิจ", company: "Siam Retail Hub", email: "tanapol@siamretail.co.th", phone: "089-555-7812", channel: "LINE", interest: "Enterprise Solution", status: "กำลังคุย", followUpDate: "2024-10-25", notes: "อัปเดตแพ็กเกจสำหรับสาขาขอนแก่นและเชียงใหม่" },
  { name: "คุณนันทิชา เจริญทรัพย์", company: "Apex Solutions", email: "nanticha@apex.co.th", phone: "086-321-4455", channel: "อีเมล", interest: "CRM Migration", status: "รายการใหม่", followUpDate: "2024-10-26", notes: "ดาวน์โหลดเอกสารแนะนำผลิตภัณฑ์จากเว็บไซต์" },
  { name: "คุณภานุเดช วงศ์สว่าง", company: "K-Logistics Express", email: "panudech@klogistics.co.th", phone: "02-779-1104", channel: "LINE", interest: "Logistics Platform", status: "กำลังคุย", followUpDate: "2024-10-22", notes: "ติดตามการขยายเวลาสัญญาบริการขนส่ง" },
  { name: "คุณชลธิชา มหาสมุทร", company: "Ocean Marine Tech", email: "cholticha@oceanmarine.th", phone: "086-777-8899", channel: "โทรศัพท์", interest: "Support Plan", status: "ปิดงาน", followUpDate: "2024-11-01", notes: "เซ็นสัญญา 1 ปี เตรียมเริ่ม Onboarding" },
  { name: "คุณอรรถพล เจนจิรวัฒน์", company: "Infinite Media Group", email: "attapol@infinite.agency", phone: "082-999-3322", channel: "อีเมล", interest: "Marketing Automation", status: "รายการใหม่", followUpDate: "2024-10-28", notes: "รอผลประชุมบอร์ดก่อนเปิด PO สิ้นเดือน" },
];

export const emptyContact: ContactDraft = {
  name: "",
  company: "",
  email: "",
  phone: "",
  channel: "โทรศัพท์",
  interest: "",
  status: "รายการใหม่",
  followUpDate: "",
  notes: "",
};
