import { pinnedProjects } from "@/lib/data";

export default function PinnedHighlights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
          Pinned Highlights
        </h2>
        <a href="#" className="text-primary font-mono text-code-sm hover:underline">
          Customize view
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pinnedProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined ${project.iconColor}`}
                >
                  {project.icon}
                </span>
                <h3 className="font-mono text-code-md text-primary font-bold">
                  {project.title}
                </h3>
              </div>
              <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant">
                {project.badge}
              </span>
            </div>
            <p className="font-sans text-body-sm text-on-surface-variant mb-6 line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-3 h-3 rounded-full ${project.languageDot}`}
                />
                <span className="font-mono text-code-sm">
                  {project.language}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
