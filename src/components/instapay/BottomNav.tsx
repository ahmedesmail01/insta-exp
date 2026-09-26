import { IP } from "./tokens";

type BottomNavProps = {
  active?: "home" | "send" | "receive" | "history" | "menu";
};

export function BottomNav({ active = "send" }: BottomNavProps) {
  const items = [
    { id: "menu" as const, label: "", icon: <MenuIcon /> },
    { id: "history" as const, label: "", icon: <DocIcon /> },
    { id: "receive" as const, label: "", icon: <ReceiveIcon /> },
    { id: "send" as const, label: "إرسال", icon: <SendIcon /> },
    { id: "home" as const, label: "الرئيسية", icon: <HomeIcon /> },
  ];

  return (
    <nav className="flex items-end justify-between border-t border-[#ece8f2] bg-white px-3 pb-2 pt-2">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <div
            key={item.id}
            className="flex min-w-12 flex-col items-center gap-0.5"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                isActive ? "text-white" : "text-[#6b6280]"
              }`}
              style={isActive ? { backgroundColor: IP.purple } : undefined}
            >
              {item.icon}
            </div>
            {item.label ? (
              <span
                className="text-[10px] font-semibold"
                style={{ color: isActive ? IP.purple : "#9a91a8" }}
              >
                {item.label}
              </span>
            ) : (
              <span className="h-3" />
            )}
          </div>
        );
      })}
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 7 7 17M15 17H7V9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}
