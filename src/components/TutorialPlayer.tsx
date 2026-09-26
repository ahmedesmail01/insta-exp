"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PaymentMethodId } from "@/data/accounts";
import { getAccountById } from "@/data/accounts";
import { getMethodLabel, getTutorialSteps } from "@/data/tutorial-steps";
import { CopyButton } from "./CopyButton";
import { ProgressDots } from "./ProgressDots";

type TutorialPlayerProps = {
  method: PaymentMethodId;
};

export function TutorialPlayer({ method }: TutorialPlayerProps) {
  const steps = useMemo(() => getTutorialSteps(method), [method]);
  const account = useMemo(() => getAccountById(method), [method]);
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const step = steps[index];
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;
  const primaryField = account.fields[0];

  function goNext() {
    setIndex((value) => Math.min(value + 1, steps.length - 1));
    setShowDetails(false);
  }

  function goPrev() {
    setIndex((value) => Math.max(value - 1, 0));
    setShowDetails(false);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-[#12061f] text-white">
      <header className="z-20 border-b border-white/10 bg-[#12061f]/95 px-4 pb-2.5 pt-[max(0.65rem,env(safe-area-inset-top))] backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-white/10 px-3 text-sm font-medium"
          >
            <span aria-hidden>→</span>
            رجوع
          </Link>
          <div className="text-center">
            <p className="text-[11px] text-white/55">شرح التحويل عبر إنستاباي</p>
            <h1 className="text-sm font-bold">{getMethodLabel(method)}</h1>
          </div>
          <div className="min-w-14 text-end text-sm font-semibold text-[#F26522]">
            {index + 1}/{steps.length}
          </div>
        </div>
        <div className="mx-auto mt-2.5 max-w-lg">
          <ProgressDots total={steps.length} current={index} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col gap-3 px-4 py-3">
        <section className="rounded-2xl bg-gradient-to-l from-[#6A0DAD] to-[#F26522] p-px">
          <div className="rounded-[0.95rem] bg-[#1a0b2e] px-3.5 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-semibold text-[#F26522]">
                  الخطوة {index + 1}
                </p>
                <h2 className="mt-0.5 text-lg font-bold leading-snug">
                  {step.title}
                </h2>
              </div>
              {step.highlight ? (
                <span className="shrink-0 rounded-full bg-[#F26522]/15 px-2.5 py-1 text-[11px] font-bold text-[#ffb48a] ring-1 ring-[#F26522]/30">
                  {step.highlight}
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-white/80">
              {step.instruction}
            </p>
            {step.tip ? (
              <p className="mt-2 text-xs leading-5 text-orange-100/90">
                <span className="font-bold text-[#F26522]">نصيحة: </span>
                {step.tip}
              </p>
            ) : null}
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-[22rem] flex-1">
          <div className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0d0618] shadow-2xl shadow-black/50">
            <Image
              key={step.image}
              src={step.image}
              alt={step.title}
              width={720}
              height={1280}
              priority
              className="h-auto w-full animate-[fadeSlide_280ms_ease]"
              sizes="(max-width: 480px) 92vw, 360px"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
          <button
            type="button"
            onClick={() => setShowDetails((value) => !value)}
            className="flex w-full min-h-10 items-center justify-between gap-2 text-sm font-semibold"
          >
            <span>بيانات التحويل للنسخ</span>
            <span className="text-[#F26522]">{showDetails ? "إخفاء" : "إظهار"}</span>
          </button>
          {showDetails ? (
            <div className="mt-2 space-y-2 border-t border-white/10 pt-2">
              {account.fields.map((field) => (
                <div
                  key={field.label}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] text-white/50">{field.label}</p>
                    <p className="truncate text-sm font-bold tracking-wide" dir="ltr">
                      {field.value}
                    </p>
                  </div>
                  <CopyButton value={field.value} label="نسخ" />
                </div>
              ))}
              <p className="text-[11px] text-white/50">
                المستفيد: {account.beneficiary} · {account.bankName}
              </p>
            </div>
          ) : (
            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="truncate text-xs text-white/65" dir="ltr">
                {primaryField.value}
              </p>
              <CopyButton value={primaryField.value} label="نسخ" />
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#12061f]/95 px-4 pb-[max(0.85rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={isFirst}
            className="min-h-12 flex-1 rounded-2xl border border-white/15 bg-white/5 text-base font-semibold disabled:opacity-35"
          >
            السابق
          </button>
          {isLast ? (
            <Link
              href="/"
              className="flex min-h-12 flex-[1.35] items-center justify-center rounded-2xl bg-gradient-to-l from-[#6A0DAD] to-[#8B2FBF] text-base font-bold"
            >
              إنهاء الشرح
            </Link>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="min-h-12 flex-[1.35] rounded-2xl bg-gradient-to-l from-[#6A0DAD] to-[#8B2FBF] text-base font-bold active:scale-[0.99]"
            >
              التالي
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
