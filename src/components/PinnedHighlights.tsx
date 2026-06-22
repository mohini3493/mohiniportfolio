import { pinnedProjects } from "@/lib/data";

export default function PinnedHighlights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
          Pinned Highlights
        </h2>
        <span className="font-mono text-code-sm text-on-surface-variant">
          {pinnedProjects.length} repositories
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pinnedProjects.map((project) => (
          <div
            key={project.title}
            className="p-5 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span>{project.emoji}</span>
                <h3 className="font-mono text-code-md text-primary font-bold">
                  {project.title}
                </h3>
              </div>
              <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant">
                {project.badge}
              </span>
            </div>

            <p className="font-sans text-body-sm text-on-surface-variant mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-on-surface-variant"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-outline-variant">
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${project.languageDot}`} />
                <span className="font-mono text-code-sm text-on-surface-variant">
                  {project.language}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-code-sm text-secondary hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-code-sm text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>
                  Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
