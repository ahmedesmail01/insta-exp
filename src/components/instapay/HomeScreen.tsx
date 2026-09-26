"use client";

import { IconSend } from "./icons";
import { BottomNav } from "./BottomNav";
import { PhoneFrame } from "./PhoneFrame";
import { IP } from "./tokens";

type HomeScreenProps = {
  highlightSend?: boolean;
  onSendMoney: () => void;
};

const SERVICES = [
  { id: "send", label: "إرسال نقود" },
  { id: "request", label: "طلب دفع" },
  { id: "bills", label: "دفع فواتير" },
  { id: "own", label: "تحويل داخلي" },
  { id: "bank", label: "تحويل بنكي" },
  { id: "donate", label: "تبرعات" },
] as const;

export function HomeScreen({ highlightSend, onSendMoney }: HomeScreenProps) {
  return (
    <PhoneFrame>
      <div className="flex min-h-[36rem] flex-col bg-[#F4F2F7]">
        <header
          className="relative overflow-hidden px-4 pb-8 pt-3 text-white"
          style={{
            background: `linear-gradient(115deg, ${IP.orange} 0%, ${IP.purple} 48%, ${IP.purpleDeep} 100%)`,
          }}
        >
          <div className="pointer-events-none absolute -start-8 top-6 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <div className="pointer-events-none absolute -end-10 -top-4 h-32 w-32 rounded-full bg-[#ff8a4c]/35 blur-2xl" />
          <div className="relative flex items-start justify-between">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
              ●
              <span className="absolute -end-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold">
                17
              </span>
            </span>
            <div className="text-end">
              <p className="text-xs text-white/80">مساء الخير</p>
              <p className="text-lg font-bold">Ahmed esmail</p>
            </div>
          </div>
        </header>

        <div className="-mt-5 space-y-3 px-3 pb-3">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="h-14 w-16 rounded-xl bg-gradient-to-br from-[#efe8ff] to-[#ffe8d6]" />
              <div className="text-end">
                <p className="font-bold" style={{ color: IP.purple }}>
                  ادفع فواتيرك
                </p>
                <p className="text-xs" style={{ color: IP.muted }}>
                  Pay your bills
                </p>
              </div>
            </div>
            <div className="mt-2 flex justify-center">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: IP.orange }} />
            </div>
          </div>

          <section>
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-xs font-semibold" style={{ color: IP.orange }}>
                المزيد
              </span>
              <h3 className="text-sm font-bold" style={{ color: IP.text }}>
                الحسابات
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="text-end">
                  <p className="text-sm font-semibold" dir="ltr">
                    ahmedesmail34180@instapay
                  </p>
                  <p className="mt-1 text-xs" style={{ color: IP.muted }}>
                    CHECKING XXXX3838
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#003B5C] text-[9px] font-black text-white">
                  CIB
                </div>
              </div>
              <div
                className="mt-3 grid grid-cols-3 divide-x divide-x-reverse divide-[#eee8f5] border-t border-[#eee8f5] pt-2 text-center text-[11px] font-semibold"
                style={{ color: IP.orange }}
              >
                <span>مشاركة QR</span>
                <span>رابط</span>
                <span>الرصيد</span>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-xs font-semibold" style={{ color: IP.orange }}>
                المزيد
              </span>
              <h3 className="text-sm font-bold" style={{ color: IP.text }}>
                الخدمات
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {SERVICES.map((service) => {
                const isSend = service.id === "send";
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={isSend ? onSendMoney : undefined}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-sm transition active:scale-[0.98]"
                    style={
                      isSend && highlightSend
                        ? { boxShadow: `0 0 0 2px ${IP.orange}, 0 0 0 8px ${IP.orange}33` }
                        : undefined
                    }
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: "#FFF1E8", color: IP.orange }}
                    >
                      {isSend ? (
                        <IconSend />
                      ) : (
                        <span className="text-sm font-black">{service.label[0]}</span>
                      )}
                    </span>
                    <span className="text-[11px] font-bold" style={{ color: IP.text }}>
                      {service.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-auto">
          <BottomNav active="home" />
        </div>
      </div>
    </PhoneFrame>
  );
}
