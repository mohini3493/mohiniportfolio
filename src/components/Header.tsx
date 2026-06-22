"use client";

import Image from "next/image";
import { useEffect } from "react";
import { profile, navLinks } from "@/lib/data";

export default function Header() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        document.querySelector<HTMLInputElement>("#search-input")?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
      <div className="flex justify-between items-center h-14 px-4 md:px-8 w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-6">
          <span className="font-sans text-body-lg font-extrabold tracking-tight text-on-surface uppercase">
            MOHINIBA.DEV
          </span>

          <div className="hidden md:flex items-center bg-surface-container border border-outline-variant px-3 py-1 rounded-sm w-64 focus-within:w-80 transition-all">
            <span className="material-symbols-outlined text-outline text-sm mr-2">
              search
            </span>
            <input
              id="search-input"
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-mono placeholder:text-outline w-full p-0"
              placeholder="Type / to search"
              type="text"
            />
          </div>

          <nav className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className={`font-mono text-label-caps uppercase tracking-wider ${
                  link.active
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              settings
            </button>
          </div>
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={32}
            height={32}
            className="rounded-full border border-outline-variant bg-surface-container"
          />
        </div>
      </div>
    </header>
  );
}
