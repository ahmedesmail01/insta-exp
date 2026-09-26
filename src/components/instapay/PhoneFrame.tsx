import type { ReactNode } from "react";
import { IP } from "./tokens";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-2xl shadow-black/30 ${className}`}
      dir="rtl"
    >
      <div
        className="flex items-center justify-between px-4 pb-1 pt-2 text-[11px] font-semibold text-white"
        style={{ background: `linear-gradient(120deg, ${IP.orange} 0%, ${IP.purple} 55%, ${IP.purpleDeep} 100%)` }}
      >
        <span>1:14</span>
        <div className="flex items-center gap-1.5 opacity-90">
          <span>5G</span>
          <WifiIcon />
          <span>62%</span>
        </div>
      </div>
      <div className="bg-[var(--ip-bg,#F4F2F7)] text-[var(--ip-text,#2A1B3D)]">
        {children}
      </div>
    </div>
  );
}

function WifiIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-4.95-3.05a7 7 0 0 1 9.9 0l-1.4 1.4a5 5 0 0 0-7.1 0l-1.4-1.4Zm-2.85-2.85a11 11 0 0 1 15.6 0l-1.4 1.4a9 9 0 0 0-12.8 0l-1.4-1.4Z" />
    </svg>
  );
}
