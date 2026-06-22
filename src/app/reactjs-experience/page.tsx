import type { Metadata } from "next";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ProjectCard from "@/components/ProjectCard";
import SkillBar from "@/components/SkillBar";
import { reactProjects, reactExpertise } from "@/lib/data";

export const metadata: Metadata = {
  title: "ReactJS Experience // MOHINIBA.DEV",
  description:
    "Senior React developer with expertise in Next.js, TypeScript, performance optimization, and modern frontend architecture.",
};

export default function ReactJSExperience() {
  return (
    <>
      <Header />
      <main className="pt-14 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <section className="flex-1 p-4 md:p-8 space-y-12">
          {/* Page Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                code
              </span>
              <div>
                <h1 className="font-sans text-headline-lg text-on-surface">
                  ReactJS Experience
                </h1>
                <p className="font-mono text-code-sm text-on-surface-variant">
                  react-expert / next.js / typescript / modern frontend
                  architecture
                </p>
              </div>
            </div>
            <div className="p-4 bg-surface-container border border-outline-variant rounded-sm">
              <div className="flex gap-4 font-mono text-code-md text-on-surface">
                <span className="text-outline-variant select-none">1</span>
                <span className="text-secondary">
                  // Building production React applications since 2018 — from
                  SPAs to full-stack Next.js
                </span>
              </div>
              <div className="flex gap-4 font-mono text-code-md text-on-surface">
                <span className="text-outline-variant select-none">2</span>
                <span className="text-secondary">
                  // Shipped dashboards, design systems, SaaS tools & e-commerce
                  storefronts at scale
                </span>
              </div>
            </div>
          </div>

          {/* Expertise Proficiency */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Skill Proficiency
              </h2>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant rounded-sm space-y-4">
              {reactExpertise.map((item) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  level={item.level}
                  color="bg-primary"
                />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Featured Projects
              </h2>
              <span className="font-mono text-code-sm text-on-surface-variant">
                {reactProjects.length} repositories
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reactProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          {/* Approach Section */}
          <div className="space-y-4">
            <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
              README.md / My Approach
            </h2>
            <div className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden">
              <div className="bg-surface-high px-4 py-2 border-b border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  description
                </span>
                <span className="font-mono text-code-sm text-on-surface">
                  REACT_PHILOSOPHY.md
                </span>
              </div>
              <div className="p-6 font-mono text-code-md text-on-surface space-y-3">
                {[
                  { num: 1, text: "# How I Build React Applications", cls: "text-secondary" },
                  { num: 2, text: "", cls: "" },
                  { num: 3, text: "## Component-First Architecture", cls: "text-primary" },
                  { num: 4, text: "I build from atomic components upward — composable, typed, and tested.", cls: "" },
                  { num: 5, text: "Every component is a contract with clear props, sensible defaults, and zero surprises.", cls: "" },
                  { num: 6, text: "", cls: "" },
                  { num: 7, text: "## Performance as a Feature", cls: "text-primary" },
                  { num: 8, text: "Code splitting, lazy loading, memoization, and server components aren't afterthoughts.", cls: "" },
                  { num: 9, text: "I profile first, optimize where it matters, and ship bundles users don't wait for.", cls: "" },
                  { num: 10, text: "", cls: "" },
                  { num: 11, text: "## Type Safety End-to-End", cls: "text-primary" },
                  { num: 12, text: "TypeScript from API contracts to UI props. Runtime errors caught at build time.", cls: "" },
                  { num: 13, text: "Zod for validation, generics for reuse, strict mode always on.", cls: "" },
                ].map((line) => (
                  <div key={line.num} className="flex gap-4">
                    <span className="text-outline-variant select-none w-4 text-right">
                      {line.num}
                    </span>
                    <span className={line.cls}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
