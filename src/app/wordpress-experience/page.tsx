import type { Metadata } from "next";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ProjectCard from "@/components/ProjectCard";
import SkillBar from "@/components/SkillBar";
import { wordpressProjects, wordpressExpertise } from "@/lib/data";

export const metadata: Metadata = {
  title: "WordPress Experience // MOHINIBA.DEV",
  description:
    "8+ years of WordPress development — custom themes, plugins, WooCommerce, multisite, headless CMS, and enterprise solutions.",
};

export default function WordPressExperience() {
  return (
    <>
      <Header />
      <main className="pt-14 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <section className="flex-1 p-4 md:p-8 space-y-12">
          {/* Page Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-3xl">
                language
              </span>
              <div>
                <h1 className="font-sans text-headline-lg text-on-surface">
                  WordPress Experience
                </h1>
                <p className="font-mono text-code-sm text-on-surface-variant">
                  wordpress-expert / 50+ sites built / themes &amp; plugins / woocommerce / headless CMS
                </p>
              </div>
            </div>
            <div className="p-4 bg-surface-container border border-outline-variant rounded-sm">
              <div className="flex gap-4 font-mono text-code-md text-on-surface">
                <span className="text-outline-variant select-none">1</span>
                <span className="text-secondary">
                  // 50+ WordPress websites delivered — from blogs to enterprise multisite networks
                </span>
              </div>
              <div className="flex gap-4 font-mono text-code-md text-on-surface">
                <span className="text-outline-variant select-none">2</span>
                <span className="text-secondary">
                  // Custom themes, plugin development, WooCommerce stores &amp; headless WordPress with React
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
              {wordpressExpertise.map((item) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  level={item.level}
                  color="bg-secondary"
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
                {wordpressProjects.length} repositories
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wordpressProjects.map((project) => (
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
                  WORDPRESS_PHILOSOPHY.md
                </span>
              </div>
              <div className="p-6 font-mono text-code-md text-on-surface space-y-3">
                {[
                  { num: 1, text: "# How I Build WordPress Solutions", cls: "text-secondary" },
                  { num: 2, text: "", cls: "" },
                  { num: 3, text: "## Custom Over Cookie-Cutter", cls: "text-primary" },
                  { num: 4, text: "I develop custom themes and plugins from scratch — no bloated page builders.", cls: "" },
                  { num: 5, text: "Clean PHP, semantic HTML, and purpose-built blocks that editors actually enjoy using.", cls: "" },
                  { num: 6, text: "", cls: "" },
                  { num: 7, text: "## Performance at Scale", cls: "text-primary" },
                  { num: 8, text: "Object caching with Redis, full-page caching, optimized queries, and CDN integration.", cls: "" },
                  { num: 9, text: "Every site I ship scores 90+ on Lighthouse and handles traffic spikes without breaking.", cls: "" },
                  { num: 10, text: "", cls: "" },
                  { num: 11, text: "## Security-First Mindset", cls: "text-primary" },
                  { num: 12, text: "Input sanitization, nonce verification, role-based access, and regular security audits.", cls: "" },
                  { num: 13, text: "I harden every installation — from wp-config lockdown to custom login endpoints.", cls: "" },
                  { num: 14, text: "", cls: "" },
                  { num: 15, text: "## Modern WordPress", cls: "text-primary" },
                  { num: 16, text: "Full Site Editing, block themes, WPGraphQL for headless builds, and REST API integrations.", cls: "" },
                  { num: 17, text: "WordPress isn't just a CMS — it's a full application platform when built right.", cls: "" },
                ].map((line) => (
                  <div key={line.num} className="flex gap-4">
                    <span className="text-outline-variant select-none w-5 text-right">
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
