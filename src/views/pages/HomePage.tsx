import { HeroSection } from '@/views/sections/Hero/HeroSection';
import { AboutSection } from '@/views/sections/About/AboutSection';
import { SkillsSection } from '@/views/sections/Skills/SkillsSection';
import { ExperienceSection } from '@/views/sections/Experience/ExperienceSection';
import { ProjectsSection } from '@/views/sections/Projects/ProjectsSection';
import { EducationSection } from '@/views/sections/Education/EducationSection';
import { ContactSection } from '@/views/sections/Contact/ContactSection';

export function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
