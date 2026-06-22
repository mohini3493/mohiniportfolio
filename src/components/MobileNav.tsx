"use client";

const tabs = [
  { icon: "work", label: "Experience", active: true, filled: true },
  { icon: "analytics", label: "Insights", active: false, filled: false },
  { icon: "person", label: "Profile", active: false, filled: false },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-outline-variant flex justify-around py-3 z-50">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`flex flex-col items-center gap-1 ${
            tab.active
              ? "text-primary"
              : "text-on-surface-variant hover:text-primary"
          } transition-colors`}
        >
          <span
            className="material-symbols-outlined"
            style={
              tab.filled
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {tab.icon}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase">
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
