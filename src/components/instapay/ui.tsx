import type { CSSProperties, ReactNode } from "react";
import { IP } from "./tokens";

type HighlightProps = {
  active?: boolean;
  children: ReactNode;
  className?: string;
};

export function Highlight({ active, children, className = "" }: HighlightProps) {
  if (!active) return <>{children}</>;
  return (
    <span className={`relative inline-flex w-full ${className}`}>
      <span
        className="pointer-events-none absolute -inset-1 animate-ping rounded-2xl opacity-35"
        style={{ background: IP.orange }}
      />
      <span
        className="relative z-10 w-full rounded-2xl"
        style={{ boxShadow: `0 0 0 2px ${IP.orange}` }}
      >
        {children}
      </span>
    </span>
  );
}

type PulseButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  highlight?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function PrimaryButton({
  children,
  onClick,
  className = "",
  highlight,
  type = "button",
  disabled,
}: PulseButtonProps) {
  return (
    <Highlight active={highlight} className="w-full">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`relative z-10 flex min-h-12 w-full items-center justify-center rounded-2xl text-base font-bold text-white transition active:scale-[0.99] disabled:opacity-40 ${className}`}
        style={{
          background: `linear-gradient(90deg, ${IP.purpleSoft}, ${IP.purple})`,
        }}
      >
        {children}
      </button>
    </Highlight>
  );
}

export function Field({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`flex min-h-12 items-center gap-2 rounded-xl border bg-white px-3 ${className}`}
      style={{ borderColor: IP.grayBorder, ...style }}
    >
      {children}
    </div>
  );
}

export function CibLogo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#003B5C] text-[9px] font-black text-white">
      CIB
    </div>
  );
}

export function BanqueMisrLogo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1e4d8c] text-[8px] font-black leading-tight text-white">
      BM
    </div>
  );
}

export function VodafoneLogo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e60000] text-[10px] font-black text-white">
      VF
    </div>
  );
}
