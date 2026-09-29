import { useProfileController } from '@/controllers/useProfileController';
import { sectionIds } from '@/config/routes';
import { Button } from '@/views/components/Button';
import { Reveal } from '@/views/components/Reveal';
import { Download, MapPin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import heroImage from '@/assets/images/me_2.png';

export function HeroSection() {
  const { profile, isLoading } = useProfileController();

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section 
      id={sectionIds.hero} 
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-background to-background -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 shadow-sm border border-accent-foreground/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {profile.availabilityChip}
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
                Hi, I'm {profile.name} <br/>
                <span className="text-primary">{profile.title}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed text-balance">
                Building scalable, reliable, and high-performance cross-platform applications.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href={siteConfig.resumeUrl} download="Midhun_M_Resume.pdf" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full group">
                    <Download className="mr-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                    Download Resume
                  </Button>
                </a>
                <a href={`#${sectionIds.contact}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-6 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {profile.location}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:flex justify-end items-center">
            <Reveal delay={0.2} width="fit-content">
              <div className="relative group p-4">
                {/* Decorative background shapes */}
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] rotate-6 scale-105 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 -z-10 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-background rounded-[2.5rem] -rotate-3 scale-105 transition-transform duration-500 group-hover:-rotate-6 -z-10" />
                
                {/* The Image */}
                <img 
                  src={heroImage} 
                  alt={profile.name} 
                  className="w-full max-w-[28rem] rounded-[2rem] shadow-lg object-cover border-4 border-background relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
