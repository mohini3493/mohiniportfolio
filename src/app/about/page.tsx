import type { Metadata } from "next";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import AboutTerminal from "@/components/AboutTerminal";

export const metadata: Metadata = {
  title: "About Me // MOHINIBA.DEV",
  description:
    "Frontend-Focused Full Stack Developer with 8+ years of experience crafting scalable, beautiful web experiences.",
};

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-14 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <section className="flex-1 p-4 md:p-8 space-y-12">
          <AboutTerminal />
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
