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
            key={exp.company}
            className="py-6 border-b border-outline-variant flex flex-col md:flex-row justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-sans text-headline-md text-primary">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant">
                  {exp.period}
                </span>
              </div>
              <p className="max-w-xl font-sans text-body-sm text-on-surface-variant">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${exp.tagColor}`} />
                  <span className="font-mono text-code-sm text-on-surface-variant">
                    {exp.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
