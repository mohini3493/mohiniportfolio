"use client";

import { useEffect, useState } from "react";
import { aboutLines } from "@/lib/data";

export default function AboutTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < aboutLines.length) {
      const timer = setTimeout(
        () => setVisibleLines((v) => v + 1),
        120
      );
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="space-y-4">
      <div className="flex items-center border-b border-outline-variant pb-2">
        <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
          About Me
        </h2>
      </div>

      {/* Terminal Window */}
      <div className="rounded-lg overflow-hidden border border-outline-variant shadow-2xl">
        {/* Title Bar */}
        <div className="bg-surface-high px-4 py-2.5 flex items-center border-b border-outline-variant relative">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-mono text-code-sm text-on-surface-variant absolute left-1/2 -translate-x-1/2">
            mohini@github — ~/about-me
          </span>
        </div>

        {/* Terminal Body */}
        <div className="bg-surface-lowest p-6 md:p-8 font-mono text-code-md space-y-6">
          {/* First Prompt */}
          <div>
            <span className="text-secondary font-bold">mohini@github</span>
            <span className="text-on-surface-variant">:</span>
            <span className="text-primary font-bold">~/about-me</span>
            <span className="text-on-surface-variant">$ </span>
          </div>

          {/* About Lines */}
          <div className="space-y-3 pl-2">
            {aboutLines.map((line, i) => (
              <div
                key={i}
                className={`flex gap-3 items-start transition-all duration-300 ${
                  i < visibleLines
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <span className="shrink-0">{line.emoji}</span>
                <span className="text-on-surface">{line.text}</span>
              </div>
            ))}
          </div>

          {/* Second Prompt with blinking cursor */}
          <div
            className={`transition-opacity duration-300 ${
              visibleLines >= aboutLines.length ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-secondary font-bold">mohini@github</span>
            <span className="text-on-surface-variant">:</span>
            <span className="text-primary font-bold">~/about-me</span>
            <span className="text-on-surface-variant">$ </span>
            <span className="inline-block w-2.5 h-5 bg-secondary animate-blink align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}
