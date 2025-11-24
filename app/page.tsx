import AboutSection from "@/sections/about";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects";
import SkillsSection from "@/sections/skills";
import ContactSection from "@/sections/contact";


export default function Home() {
  return (
    <>

      <Header/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
     
    </>
  );
}