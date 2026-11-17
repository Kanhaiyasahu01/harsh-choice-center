"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { business } from "@/lib/business";

const tabs = [
  { id: "top", label: "होम" },
  { id: "services", label: "सेवाएँ" },
  { id: "why-us", label: "खास" },
  { id: "visit", label: "जाएँ" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function TabIcon({ id, active }: { id: TabId; active: boolean }) {
  const stroke = active ? 2.2 : 1.7;

  if (id === "top") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "services") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
      </svg>
    );
  }

  if (id === "why-us") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="m12 3.5 2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.9l-4.8 2.36.92-5.34-3.88-3.78 5.36-.78L12 3.5Z"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth={stroke}
      />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  );
}

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>(".app-header");
  return (header?.offsetHeight ?? 56) + 8;
}

function scrollToSection(id: TabId) {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    id === "top"
      ? 0
      : window.scrollY + el.getBoundingClientRect().top - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

export function BottomDock() {
  const [active, setActive] = useState<TabId>("top");
  const lockRef = useRef(false);
  const lockTimer = useRef<number | null>(null);

  const syncActiveFromScroll = useCallback(() => {
    if (lockRef.current) return;

    const marker = getHeaderOffset() + 24;
    let current: TabId = "top";

    for (const tab of tabs) {
      const el = document.getElementById(tab.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= marker) {
        current = tab.id;
      }
    }

    setActive(current);
  }, []);

  useEffect(() => {
    syncActiveFromScroll();
    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
    };
  }, [syncActiveFromScroll]);

  const handleTabClick = (id: TabId) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(id);
    lockRef.current = true;
    if (lockTimer.current) window.clearTimeout(lockTimer.current);
    scrollToSection(id);
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = false;
      syncActiveFromScroll();
    }, 700);
  };

  return (
    <nav className="dock safe-bottom" aria-label="ऐप नेविगेशन">
      <div className="dock-scrim" aria-hidden />

      <div className="relative z-10 grid grid-cols-2 gap-2 px-3 pt-2.5">
        <a
          href={`tel:${business.phoneTel}`}
          className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[var(--leaf)] text-sm font-bold text-white active:scale-[0.98]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7.5 4.5h3l1.2 4.2-2 1.2a12.5 12.5 0 0 0 5.4 5.4l1.2-2 4.2 1.2v3A2 2 0 0 1 18.5 19 14.5 14.5 0 0 1 5 5.5a2 2 0 0 1 2.5-1Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          कॉल करें
        </a>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[var(--ink)] text-sm font-bold text-white active:scale-[0.98]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7 18.5 5 21v-5.2A8.5 8.5 0 1 1 12.5 20H8.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          WhatsApp
        </a>
      </div>

      <div className="relative z-10 mt-1 grid grid-cols-4 px-1 pb-1">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={handleTabClick(tab.id)}
              className={`flex min-h-[3.1rem] flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[11px] font-semibold transition ${
                isActive
                  ? "bg-[var(--mist)] text-[var(--leaf)]"
                  : "bg-transparent text-[var(--ink)]/40"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <TabIcon id={tab.id} active={isActive} />
              <span className="font-[family-name:var(--font-hindi)] leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
