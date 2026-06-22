import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <div className="space-y-6">
      <div className="flex items-center border-b border-outline-variant pb-2">
        <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
          Professional Experience
        </h2>
      </div>
      <div className="space-y-0">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="py-6 border-b border-outline-variant"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-sans text-headline-md text-primary">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant">
                  {exp.period}
                </span>
              </div>
              <span className="font-mono text-code-sm text-on-surface-variant shrink-0">
                {exp.location}
              </span>
            </div>

            <ul className="space-y-1.5 mb-4">
              {exp.highlights.map((point, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-secondary font-mono text-code-sm shrink-0 pt-0.5">
                    +
                  </span>
                  <span className="font-sans text-body-sm text-on-surface-variant">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
