export function IconWallet({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H19a1 1 0 0 1 1 1v2H7.5A2.5 2.5 0 0 0 5 11.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5h-4.5a1.5 1.5 0 0 0 0 3H21" strokeLinecap="round" />
    </svg>
  );
}

export function IconCard({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M7 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconBank({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAt({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M16 12a4 4 0 1 1-1.2-2.8M16 8v5a2.5 2.5 0 0 0 5 0" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  );
}

export function IconSend({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 14 16 8M11 8h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClipboard({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 4h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2Z" />
      <path d="M9 4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1" />
    </svg>
  );
}
