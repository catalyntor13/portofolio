import Footer from "@/sections/footer";
import Header from "@/sections/header";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects";
import ContactSection from "@/sections/contact";
import ServicesSection from "@/sections/services";


export default function Home() {
  return (
    <>

      <Header />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />

    </>
  );
}