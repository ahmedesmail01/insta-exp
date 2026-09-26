import Link from "next/link";
import { PAYMENT_ACCOUNTS } from "@/data/accounts";
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
          <ol className="mt-3 space-y-2 text-sm leading-7 text-[#3d2a55]">
            <li>١. انسخ رقم الحساب أو المحفظة من البطاقات بالأسفل.</li>
            <li>٢. افتح تطبيق إنستاباي على موبايلك.</li>
            <li>٣. اضغط «ابدأ الشرح» واتبع الصور خطوة بخطوة.</li>
          </ol>
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
