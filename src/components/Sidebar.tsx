import Image from "next/image";
import { profile } from "@/lib/data";

export default function Sidebar() {
  return (
    <aside className="md:w-80 md:sticky md:top-14 h-fit border-r border-outline-variant p-4 md:p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full animate-border-spin bg-[conic-gradient(from_0deg,transparent_40%,#238636_50%,#2ea043_55%,#7bdb80_60%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 rounded-full animate-border-spin bg-[conic-gradient(from_0deg,transparent_40%,#238636_50%,#2ea043_55%,#7bdb80_60%,transparent_70%)] blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <Image
            src={profile.avatar}
            alt={`${profile.name} Avatar`}
            width={280}
            height={280}
            className="relative w-full aspect-square rounded-full border-[3px] border-surface bg-surface-low object-cover shadow-2xl"
          />
        </div>

        <div>
          <h1 className="font-sans text-headline-md text-on-surface">
            {profile.name}
          </h1>
          <p className="font-mono text-code-md text-on-surface-variant">
            {profile.username}
          </p>
        </div>

        <p className="font-sans text-body-sm leading-relaxed text-on-surface">
          {profile.bio}
        </p>

        <button className="w-full bg-secondary-container text-white py-2 px-4 rounded-sm font-mono text-label-caps uppercase tracking-wider hover:opacity-90 transition-all active:scale-[0.98]">
          Follow
        </button>

        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/mohini3493"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-on-surface-variant group-hover:text-on-surface transition-colors"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
              <span className="font-mono text-code-sm text-on-surface-variant group-hover:text-on-surface transition-colors">GitHub</span>
            </div>
            <span className="font-mono text-code-sm text-primary font-bold">1,155 views</span>
          </a>
          <a
            href="https://linkedin.com/in/mohini3493"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group"
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-[#0A66C2]"><path d="M13.6 0H2.4C1.07 0 0 1.07 0 2.4v11.2C0 14.93 1.07 16 2.4 16h11.2c1.33 0 2.4-1.07 2.4-2.4V2.4C16 1.07 14.93 0 13.6 0zM4.75 13.6H2.4V6h2.35v7.6zM3.58 5.03a1.36 1.36 0 110-2.72 1.36 1.36 0 010 2.72zM13.6 13.6h-2.35V9.92c0-.88-.02-2-.1-2.13-.1-.15-.38-.23-.67-.23-.7 0-1.13.53-1.13 1.28v4.76H7.01V6h2.26v1.04h.03c.31-.6 1.08-1.23 2.23-1.23 2.38 0 2.83 1.57 2.83 3.61v4.18h-.76z" /></svg>
              <span className="font-mono text-code-sm text-on-surface-variant group-hover:text-on-surface transition-colors">LinkedIn</span>
            </div>
            <span className="font-mono text-code-sm text-primary font-bold">9,000+ followers</span>
          </a>
          <div className="flex items-center justify-between w-full px-3 py-2 bg-surface-container border border-outline-variant rounded-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "16px" }}>commit</span>
              <span className="font-mono text-code-sm text-on-surface-variant">Total Commits</span>
            </div>
            <span className="font-mono text-code-sm text-secondary font-bold">1,000+</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 border-t border-outline-variant">
        {profile.details.map((detail) => (
          <div
            key={detail.icon}
            className="flex items-center gap-3 text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-sm">
              {detail.icon}
            </span>
            {detail.href ? (
              <a
                href={detail.href}
                className="font-mono text-code-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {detail.text}
              </a>
            ) : (
              <span className="font-mono text-code-sm">{detail.text}</span>
            )}
          </div>
        ))}
      </div>

    </aside>
  );
}
