import { ContactIcon } from "./contact-icon";

export function DeleteContactDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="delete-title">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-50 text-danger"><ContactIcon name="delete" /></span>
        <h2 id="delete-title" className="mt-4 text-lg font-bold">ลบผู้ติดต่อนี้หรือไม่?</h2>
        <p className="mt-2 text-xs leading-5 text-slate-500">ข้อมูลจะถูกลบออกจาก mock data ในหน้านี้ และจะกลับมาเมื่อรีเฟรชหน้า</p>
        <div className="mt-6 flex justify-end gap-2"><button onClick={onCancel} className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold">ยกเลิก</button><button onClick={onConfirm} className="rounded-lg bg-danger px-4 py-2.5 text-xs font-semibold text-white">ลบผู้ติดต่อ</button></div>
      </div>
    </div>
  );
}
