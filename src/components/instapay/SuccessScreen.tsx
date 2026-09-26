"use client";

import type { PaymentAccount } from "@/data/accounts";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/data/whatsapp";
import { PhoneFrame } from "./PhoneFrame";
import { IP } from "./tokens";

type SuccessScreenProps = {
  account: PaymentAccount;
  onFinish: () => void;
};

export function SuccessScreen({ account, onFinish }: SuccessScreenProps) {
  return (
    <PhoneFrame>
      <div
        className="relative flex min-h-[36rem] flex-col overflow-hidden px-5 pb-5 pt-8 text-white"
        style={{
          background: `linear-gradient(160deg, ${IP.purple} 0%, ${IP.purpleDeep} 55%, ${IP.orange} 140%)`,
        }}
      >
        <div className="pointer-events-none absolute -end-10 bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 flex flex-1 flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-emerald-500 shadow-lg">
            ✓
          </div>
          <h2 className="mt-4 text-2xl font-black">تم التحويل بنجاح</h2>
          <p className="mt-2 text-sm text-white/80">
            تم إرسال المبلغ إلى {account.beneficiary}
          </p>

          <div className="mt-6 w-full rounded-3xl bg-white/15 p-4 text-start backdrop-blur-sm ring-1 ring-white/25">
            <p className="text-xs font-semibold text-[#ffd8b5]">خطوة أخيرة مهمة</p>
            <p className="mt-2 text-sm leading-7 text-white">
              ابعت سكرين شوت التحويل على واتساب لتأكيد الدفع مع شركة الوسام:
            </p>
            <p className="mt-2 text-center text-lg font-black tracking-wide" dir="ltr">
              {WHATSAPP_DISPLAY}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-base font-bold text-white shadow-lg transition active:scale-[0.99]"
            >
              <WhatsAppIcon />
              فتح واتساب وإرسال السكرين
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={onFinish}
          className="relative z-10 mt-4 min-h-12 w-full rounded-2xl bg-white font-bold text-[#2A1B3D]"
        >
          إنهاء الشرح
        </button>
      </div>
    </PhoneFrame>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 2.08.62 4.02 1.7 5.65L2 22l4.7-1.55a9.86 9.86 0 0 0 5.34 1.56h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.75 14.07c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.36-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.27.57-.34.76-.34h.55c.17 0 .4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.1.2-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.27.75 1.23 1.61 2 .94.84 1.74 1.1 2.01 1.23.27.14.43.12.59-.07.17-.2.7-.81.89-1.09.19-.27.38-.23.64-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.7-.17 1.37Z" />
    </svg>
  );
}
