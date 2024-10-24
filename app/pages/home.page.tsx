import { Header } from "@/components/header";
import { AcheivementsSection } from "@/modules/acheivements.section";
import { FooterSection } from "@/modules/footer.section";
import { HeroSection } from "@/modules/hero.section";
import { ProjectsSection } from "@/modules/projects.section";
import { TeamSection } from "@/modules/team.section";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className='space-y-10'>
        <HeroSection />
        <ProjectsSection />
        <AcheivementsSection />
        <TeamSection />
        <FooterSection />
      </div>
    </>
  );
};
