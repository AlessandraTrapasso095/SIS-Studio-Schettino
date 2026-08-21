import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BimSection } from "@/components/home/bim-section";
import { ContactSection } from "@/components/home/contact-section";
import { FinalCta } from "@/components/home/final-cta";
import { FormationCertifications } from "@/components/home/formation-certifications";
import { Hero } from "@/components/home/hero";
import { IntroStudio } from "@/components/home/intro-studio";
import { NewsSection } from "@/components/home/news-section";
import { NumbersSection } from "@/components/home/numbers-section";
import { RecruitingSection } from "@/components/home/recruiting-section";
import { Services } from "@/components/home/services";
import { TeamSection } from "@/components/home/team-section";
import { VerificationSection } from "@/components/home/verification-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <IntroStudio />
        <NumbersSection />
        <Services />
        <TeamSection />
        <BimSection />
        <VerificationSection />
        <FormationCertifications />
        <NewsSection />
        <RecruitingSection />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
