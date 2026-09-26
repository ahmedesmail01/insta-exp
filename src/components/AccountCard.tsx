import type { PaymentAccount } from "@/data/accounts";
import { CopyButton } from "./CopyButton";

type AccountCardProps = {
  account: PaymentAccount;
};

export function AccountCard({ account }: AccountCardProps) {
  return (
    <article
      className="overflow-hidden rounded-3xl text-white shadow-lg shadow-black/10"
      style={{ backgroundColor: account.accent }}
    >
      <div className="relative px-5 pb-5 pt-5">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -start-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-12 -end-6 h-36 w-36 rounded-full bg-black/20 blur-2xl" />
        </div>

        <div className="relative space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-white/70">شركة الوسام</p>
              <h2 className="mt-1 text-lg font-bold leading-snug">
                {account.title}
              </h2>
            </div>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
              {account.shortName}
            </span>
          </div>

          <div className="space-y-3">
            {account.fields.map((field) => (
              <div
                key={field.label}
                className="rounded-2xl bg-black/20 p-3 backdrop-blur-sm"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-white/70">{field.label}</span>
                  <CopyButton value={field.value} label="نسخ" />
                </div>
                <p
                  className="break-all text-base font-bold tracking-wide"
                  dir="ltr"
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
