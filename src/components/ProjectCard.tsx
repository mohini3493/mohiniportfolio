interface ProjectCardProps {
  title: string;
  badge: string;
  description: string;
  tech: string[];
  metrics: Record<string, string>;
}

export default function ProjectCard({ title, badge, description, tech, metrics }: ProjectCardProps) {
  return (
    <div className="p-6 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-mono text-code-md text-primary font-bold">{title}</h3>
        <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant shrink-0 ml-2">
          {badge}
        </span>
      </div>
      <p className="font-sans text-body-sm text-on-surface-variant mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-primary"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 pt-3 border-t border-outline-variant">
        {Object.entries(metrics).map(([, value]) => (
          <span key={value} className="font-mono text-code-sm text-secondary">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}
