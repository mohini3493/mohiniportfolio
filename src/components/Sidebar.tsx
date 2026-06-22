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

      <div className="pt-6 border-t border-outline-variant">
        <h3 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant mb-4">
          Core Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.stack.map((tech) => (
            <span
              key={tech.name}
              className={`px-2 py-1 bg-surface-container border border-outline-variant rounded-sm font-mono text-code-sm ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
