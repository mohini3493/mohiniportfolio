"use client";

import { useMemo } from "react";

const LEVELS = [
  "bg-surface-highest",
  "bg-secondary/20",
  "bg-secondary/50",
  "bg-secondary/80",
  "bg-secondary",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function ContributionHeatmap() {
  const grid = useMemo(() => {
    return Array.from({ length: 52 }, (_, weekIdx) =>
      Array.from({ length: 7 }, (_, dayIdx) => {
        const seed = weekIdx * 7 + dayIdx + 42;
        const levelIdx = Math.floor(seededRandom(seed) * LEVELS.length);
        return LEVELS[levelIdx];
      })
    );
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
        Activity Proficiency
      </h2>
      <div className="p-6 bg-surface-container border border-outline-variant rounded-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-code-sm text-on-surface-variant">
            Frontend &amp; E-commerce Engineering Velocity
          </span>
        </div>

        <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
          {grid.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((level, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`contribution-cell ${level} hover:scale-125 transition-transform duration-100`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2 text-on-surface-variant">
          <span className="font-mono text-code-sm">
            8+ years of professional commits
          </span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-code-sm mr-2">Less</span>
            {LEVELS.map((level, i) => (
              <div key={i} className={`contribution-cell ${level}`} />
            ))}
            <span className="font-mono text-code-sm ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
