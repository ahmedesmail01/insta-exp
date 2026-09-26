"use client";

import type { PaymentAccount } from "@/data/accounts";
import { PhoneFrame } from "./PhoneFrame";
import { BanqueMisrLogo, CibLogo, VodafoneLogo } from "./ui";
import { IP } from "./tokens";

type ConfirmScreenProps = {
  account: PaymentAccount;
  amount?: number;
  fee?: number;
  highlightConfirm?: boolean;
  onConfirm: () => void;
};

export function ConfirmScreen({
  account,
  amount = 100000,
  fee = 20,
  highlightConfirm,
  onConfirm,
}: ConfirmScreenProps) {
  const total = amount + fee;
  const isWallet = account.id === "vodafone-cash";
  const destValue = account.fields[0]?.value ?? "";

  return (
    <PhoneFrame>
      <div
        className="relative flex min-h-[38rem] flex-col overflow-hidden px-4 pb-4 pt-3 text-white"
        style={{
          background: `linear-gradient(160deg, ${IP.purpleSoft} 0%, ${IP.purple} 35%, #3b0a6e 70%, ${IP.orange} 140%)`,
        }}
      >
        <div className="pointer-events-none absolute -start-16 bottom-24 h-56 w-56 rounded-full bg-[#ff6b35]/50 blur-3xl" />
        <div className="pointer-events-none absolute -end-10 bottom-0 h-40 w-40 rounded-full bg-[#ff2d95]/35 blur-3xl" />

        <div className="relative z-10 mb-4 flex items-center justify-between">
          <span className="w-9" />
          <h1 className="text-lg font-bold">إرسال نقود</h1>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg"
            aria-label="رجوع"
          >
            →
          </button>
        </div>

        <div className="relative z-10 text-center">
          <p className="text-3xl font-black tracking-tight">
            {amount.toLocaleString("en-EG")} EGP
          </p>
          <p className="mt-1 text-sm text-white/80">المبلغ المحول</p>
          <div className="mx-auto mt-3 max-w-xs rounded-2xl bg-[#2a0a4a]/45 px-4 py-3 text-sm backdrop-blur">
            <div className="flex items-center justify-between">
              <span>{fee} EGP</span>
              <span className="flex items-center gap-1">
                الرسوم <span className="text-[10px] opacity-70">ⓘ</span>
              </span>
            </div>
            <div className="my-2 h-px bg-white/20" />
            <div className="flex items-center justify-between font-bold">
              <span>{total.toLocaleString("en-EG")} EGP</span>
              <span>المبلغ الإجمالي</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-5 space-y-0">
          <div className="rounded-2xl bg-white p-3 text-[#2A1B3D] shadow-lg">
            <p className="mb-1 text-xs text-[#8B8198]">من</p>
            <div className="flex items-center justify-between gap-2">
              <div className="text-end">
                <p className="text-sm font-semibold" dir="ltr">
                  ahmedesmail34180@instapay
                </p>
                <p className="text-xs text-[#8B8198]">ACCOUNT •••3838</p>
              </div>
              <CibLogo />
            </div>
          </div>

          <div className="relative z-20 flex justify-center py-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F26522] shadow">
              ↓↓
            </span>
          </div>

          <div className="rounded-2xl bg-white p-3 text-[#2A1B3D] shadow-lg">
            <p className="mb-1 text-xs text-[#8B8198]">إلى</p>
            <div className="flex items-center justify-between gap-2">
              <div className="text-end">
                <p className="text-sm font-bold">{account.beneficiary}</p>
                <p className="mt-1 text-base font-black tracking-wide" dir="ltr">
                  {destValue}
                </p>
              </div>
              {isWallet ? <VodafoneLogo /> : account.id === "cib" ? <CibLogo /> : <BanqueMisrLogo />}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 flex flex-col items-center gap-3">
          <button
            type="button"
            className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur"
          >
            المزيد من التفاصيل ▾
          </button>
          <p className="text-2xl font-black tracking-[0.2em] text-white/90">IPN</p>
        </div>

        <div className="relative z-10 mt-auto flex items-center gap-2 pt-4">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a0b2e] text-white"
            aria-label="متابعة"
          >
            →
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`relative flex min-h-12 flex-1 items-center justify-center rounded-2xl bg-white text-base font-bold text-[#2A1B3D] ${
              highlightConfirm ? "ring-2 ring-[#F26522] ring-offset-2 ring-offset-transparent" : ""
            }`}
          >
            {highlightConfirm ? (
              <span
                className="pointer-events-none absolute -inset-1 animate-ping rounded-2xl opacity-30"
                style={{ background: IP.orange }}
              />
            ) : null}
            <span className="relative">تأكيد</span>
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
