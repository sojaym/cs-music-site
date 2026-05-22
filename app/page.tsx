import { AboutSection } from "@/components/about-section";
import { CatalogSection } from "@/components/catalog-section";
import { ConnectSection } from "@/components/connect-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LatestRelease } from "@/components/latest-release";
import { featuredRelease, releases } from "@/releases/catalog";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <LatestRelease release={featuredRelease} />
        <CatalogSection releases={releases} />
        <AboutSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
