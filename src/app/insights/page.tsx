import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights // MOHINIBA.DEV",
  description:
    "Technical articles and guides on Shopify, WordPress, React, AI tools, and web development by Mohiniba Jadeja.",
};

export default function Insights() {
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
                article
              </span>
              <div>
                <h1 className="font-sans text-headline-lg text-on-surface">
                  Insights
                </h1>
                <p className="font-mono text-code-sm text-on-surface-variant">
                  blog / technical articles / guides &amp; tutorials
                </p>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <h2 className="font-mono text-label-caps uppercase tracking-wider text-on-surface-variant">
                Published on Medium
              </h2>
              <a
                href="https://medium.com/@mohini3493"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-code-sm text-primary hover:underline"
              >
                @mohini3493
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.map((post) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container border border-outline-variant rounded-sm overflow-hidden hover:border-primary transition-colors group block"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-surface-high">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-code-sm text-on-surface-variant">
                        {post.date}
                      </span>
                      <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        open_in_new
                      </span>
                    </div>
                    <h3 className="font-sans text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-sans text-body-sm text-on-surface-variant line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex gap-2 flex-wrap pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-surface-high border border-outline-variant rounded-sm font-mono text-code-sm text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
