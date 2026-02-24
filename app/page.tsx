import { AboutSection } from "@/app/sections/about-section";
import { ContactSection } from "@/app/sections/contact-section";
import { HeroSection } from "@/app/sections/hero-section";
import { HowIBuildSection } from "@/app/sections/how-i-build-section";
import { NowSection } from "@/app/sections/now-section";
import { ProjectsSection } from "@/app/sections/projects-section";
import { TechStackSection } from "@/app/sections/tech-stack-section";
import { Navigation } from "@/components/navigation";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <NowSection />
        <HowIBuildSection />
      </main>
      <ContactSection />
    </>
  );
}
