import type { CSSProperties, ReactNode } from "react";
import { IP } from "./tokens";
import { Field } from "./ui";

type StepFieldProps = {
  step: number;
  label?: string;
  active: boolean;
  done: boolean;
  locked: boolean;
  children: ReactNode;
  fieldStyle?: CSSProperties;
};

export function StepField({
  step,
  label,
  active,
  done,
  locked,
  children,
  fieldStyle,
}: StepFieldProps) {
  return (
    <div
      className={`transition-opacity ${locked ? "pointer-events-none opacity-40" : "opacity-100"}`}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        {label ? (
          <p
            className="text-xs font-semibold"
            style={{ color: active ? IP.orange : IP.muted }}
          >
            {label}
          </p>
        ) : (
          <span />
        )}
        <span
          className="flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-black text-white"
          style={{
            background: done ? "#16a34a" : active ? IP.orange : "#c4bdd0",
          }}
        >
          {done ? "✓" : step}
        </span>
      </div>
      <Field
        style={{
          ...fieldStyle,
          ...(active
            ? {
                borderColor: IP.orange,
                boxShadow: `0 0 0 3px ${IP.orange}33`,
              }
            : done
              ? { borderColor: "#86efac" }
              : undefined),
        }}
      >
        {children}
      </Field>
    </div>
  );
}

export function getBankFormStep(values: {
  bankName: string;
  accountNumber: string;
  beneficiary: string;
  amount: string;
  notes: string;
}): number {
  if (!values.bankName) return 1;
  if (!values.accountNumber) return 2;
  if (!values.beneficiary) return 3;
  if (!values.amount) return 4;
  if (values.notes.replace(/\D/g, "").length < 10) return 5;
  return 6;
}

export function getWalletFormStep(values: {
  phone: string;
  amount: string;
  purpose: string;
  notes: string;
}): number {
  if (!values.phone) return 1;
  if (!values.amount) return 2;
  if (!values.purpose) return 3;
  if (values.notes.replace(/\D/g, "").length < 10) return 4;
  return 5;
}
