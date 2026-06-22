"use client";

import { profile } from "@/lib/data";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFigma,
  SiFramer,
  SiShadcnui,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiWix,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiVite,
  SiAnthropic,
  SiGithubcopilot,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandAdobe } from "react-icons/tb";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFigma,
  TbBrandAdobe,
  SiFramer,
  SiShadcnui,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiWix,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  FaAws,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiVite,
  SiAnthropic,
  SiGithubcopilot,
};

export default function TechStack() {
  return (
    <div className="pt-6 border-t border-outline-variant space-y-4">
      {Object.entries(profile.stack).map(([category, techs]) => (
        <div key={category}>
          <h3 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant mb-2">
            {category}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {techs.map((tech) => {
              const Icon = iconMap[tech.icon];
              return (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-2 py-1 bg-surface-container border border-outline-variant rounded-sm font-mono text-code-sm text-on-surface-variant hover:border-primary/50 hover:text-on-surface transition-colors"
                >
                  {Icon && <Icon size={12} style={{ color: tech.color }} />}
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
