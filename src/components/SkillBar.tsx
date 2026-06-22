interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export default function SkillBar({ skill, level, color = "bg-primary" }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <span className="font-mono text-code-sm text-on-surface">{skill}</span>
        <span className="font-mono text-code-sm text-on-surface-variant">{level}%</span>
      </div>
      <div className="h-2 bg-surface-highest rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
