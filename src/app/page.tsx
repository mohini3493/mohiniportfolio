import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PinnedHighlights from "@/components/PinnedHighlights";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14 w-full max-w-[1280px] mx-auto flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <section className="flex-1 p-4 md:p-8 space-y-12">
          <PinnedHighlights />
          <ContributionHeatmap />
          <Experience />
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
