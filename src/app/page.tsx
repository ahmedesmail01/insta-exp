import Link from "next/link";
import { PAYMENT_ACCOUNTS } from "@/data/accounts";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/data/whatsapp";
import { AccountCard } from "@/components/AccountCard";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#f7f3ef] text-[#1a1030]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 -top-20 h-72 w-72 rounded-full bg-[#6A0DAD]/20 blur-3xl" />
        <div className="absolute -end-16 top-40 h-64 w-64 rounded-full bg-[#F26522]/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#2a0a4a] via-[#4a148c] to-transparent" />
      </div>

      <main className="relative mx-auto max-w-lg px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))]">
        <header className="mb-8 pt-4 text-white">
          <p className="text-sm font-medium text-white/70">شركة الوسام</p>
          <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight">
            دليل التحويل
            <br />
            عبر إنستاباي
          </h1>
          <p className="mt-3 max-w-[20rem] text-sm leading-7 text-white/80">
            اتبع الخطوات بالصور لتعرف كيف تحوّل المبلغ لحساباتنا بسهولة من موبايلك.
          </p>
        </header>

        <section className="mb-6 rounded-3xl border border-white/60 bg-white/90 p-4 shadow-xl shadow-[#2a0a4a]/10 backdrop-blur">
          <h2 className="text-lg font-bold text-[#2a0a4a]">كيف تستخدم الدليل؟</h2>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm leading-7 text-[#3d2a55]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6A0DAD] text-[11px] font-black text-white">
                ١
              </span>
              <span>انسخ رقم الحساب أو المحفظة من البطاقات بالأسفل.</span>
            </li>
            <li className="flex items-start gap-3 text-sm leading-7 text-[#3d2a55]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6A0DAD] text-[11px] font-black text-white">
                ٢
              </span>
              <span>افتح تطبيق إنستاباي على موبايلك واتبع الشرح.</span>
            </li>
          </ol>

          <div className="mt-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/8 p-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[11px] font-black text-white">
                ٣
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-6 text-[#1a1030]">
                  بعد التحويل ابعت سكرين شوت على واتساب
                </p>
                <p
                  className="mt-1 text-base font-black tracking-wide text-[#128C7E]"
                  dir="ltr"
                >
                  {WHATSAPP_DISPLAY}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-sm transition active:scale-[0.99]"
                >
                  <WhatsAppIcon />
                  فتح واتساب الآن
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-xl font-bold text-[#2a0a4a]">حسابات التحويل</h2>
            <span className="text-xs font-medium text-[#F26522]">انسخ ثم الصق</span>
          </div>

          {PAYMENT_ACCOUNTS.map((account) => (
            <div key={account.id} className="space-y-3">
              <AccountCard account={account} />
              <Link
                href={`/tutorial/${account.id}`}
                className="flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-l from-[#6A0DAD] to-[#8B2FBF] text-base font-bold text-white shadow-lg shadow-purple-900/20 transition active:scale-[0.99]"
              >
                ابدأ الشرح — {account.shortName}
              </Link>
            </div>
          ))}
        </section>

        <footer className="mt-10 pb-[env(safe-area-inset-bottom)] text-center text-xs leading-6 text-[#6b5a7a]">
          هذا الدليل تعليمي لمساعدة عملاء شركة الوسام على إتمام التحويل عبر إنستاباي.
        </footer>
      </main>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 2.08.62 4.02 1.7 5.65L2 22l4.7-1.55a9.86 9.86 0 0 0 5.34 1.56h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.75 14.07c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.36-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.27.57-.34.76-.34h.55c.17 0 .4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.1.2-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.56.17.27.75 1.23 1.61 2 .94.84 1.74 1.1 2.01 1.23.27.14.43.12.59-.07.17-.2.7-.81.89-1.09.19-.27.38-.23.64-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.7-.17 1.37Z" />
    </svg>
  );
}
