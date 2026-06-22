import type { Metadata } from "next";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import SkillBar from "@/components/SkillBar";
import {
  shopifySummary,
  shopifyCoreExpertise,
  shopifyTechnicalSkills,
  shopifyFeatures,
  shopifyAchievements,
  shopifyLiveProjects,
  shopifyExpertise,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Shopify Experience // MOHINIBA.DEV",
  description:
    "Senior Shopify Plus Developer with 8+ years — Shopify 2.0, Liquid, Hydrogen, Checkout Extensions, CRO, and 100+ ecommerce projects delivered.",
};

export default function ShopifyExperience() {
  return (
    <>
      <Header />
      <main className="pt-14 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <section className="flex-1 p-4 md:p-8 space-y-12">
          {/* Page Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-3xl">
                shopping_cart
              </span>
              <div>
                <h1 className="font-sans text-headline-lg text-on-surface">
                  Shopify Experience
                </h1>
                <p className="font-mono text-code-sm text-on-surface-variant">
                  shopify-plus-expert / 100+ projects / 8+ years / ecommerce
                  specialist
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                README.md / Summary
              </h2>
            </div>
            <div className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden">
              <div className="bg-surface-high px-4 py-2 border-b border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  description
                </span>
                <span className="font-mono text-code-sm text-on-surface">
                  SUMMARY.md
                </span>
              </div>
              <div className="p-6 font-mono text-code-md text-on-surface space-y-4">
                {shopifySummary.map((para, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-outline-variant select-none w-4 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-on-surface-variant">{para}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Proficiency */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Skill Proficiency
              </h2>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant rounded-sm space-y-4">
              {shopifyExpertise.map((item) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  level={item.level}
                  color="bg-tertiary"
                />
              ))}
            </div>
          </div>

          {/* Core Shopify Expertise */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Core Shopify Expertise
              </h2>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant rounded-sm">
              <div className="flex flex-wrap gap-2">
                {shopifyCoreExpertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-tertiary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(shopifyTechnicalSkills).map(
                ([category, skills]) => (
                  <div
                    key={category}
                    className="p-5 bg-surface-container border border-outline-variant rounded-sm"
                  >
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-outline-variant">
                      <span className="material-symbols-outlined text-sm text-tertiary">
                        {category === "Shopify Ecosystem"
                          ? "storefront"
                          : category === "Frontend Development"
                            ? "code"
                            : category === "Ecommerce Features"
                              ? "shopping_bag"
                              : category === "Integrations"
                                ? "hub"
                                : "build"}
                      </span>
                      <h3 className="font-mono text-code-sm font-bold text-on-surface">
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-on-surface-variant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Features Implemented */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Features Implemented
              </h2>
            </div>
            <div className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden">
              <div className="bg-surface-high px-4 py-2 border-b border-outline-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-on-surface-variant">
                  checklist
                </span>
                <span className="font-mono text-code-sm text-on-surface">
                  CHANGELOG.md
                </span>
              </div>
              <div className="p-6 space-y-2">
                {shopifyFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-code-sm text-outline-variant select-none w-5 text-right shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-secondary font-mono text-code-sm shrink-0">
                      +
                    </span>
                    <span className="font-sans text-body-sm text-on-surface-variant">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4">
            <div className="flex items-center border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Key Achievements
              </h2>
            </div>
            <div className="p-6 bg-surface-container border border-outline-variant rounded-sm space-y-4">
              {shopifyAchievements.map((achievement, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-tertiary text-lg shrink-0">
                    emoji_events
                  </span>
                  <span className="font-sans text-body-sm text-on-surface">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Projects */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Live Projects
              </h2>
              <span className="font-mono text-code-sm text-on-surface-variant">
                {shopifyLiveProjects.length} repositories
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shopifyLiveProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-surface-container border border-outline-variant rounded-sm hover:border-primary transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-sm">
                        storefront
                      </span>
                      <h3 className="font-mono text-code-md text-primary font-bold group-hover:underline">
                        {project.name}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 border border-outline-variant rounded-full text-[10px] font-mono font-bold uppercase text-on-surface-variant">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">
                      link
                    </span>
                    <span className="font-mono text-code-sm text-on-surface-variant group-hover:text-primary transition-colors truncate">
                      {project.url.replace("https://", "")}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
