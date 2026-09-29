import { useEducationController } from '@/controllers/useEducationController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';
import { GraduationCap, Award, Globe } from 'lucide-react';

export function EducationSection() {
  const { education, certifications, languages, isLoading } = useEducationController();

  if (isLoading) return null;

  return (
    <section id={sectionIds.education} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="Education & More" 
            subtitle="Academic background, certifications, and languages." 
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <Reveal delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map(item => (
                  <div key={item.id} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <h4 className="font-semibold text-foreground mb-1">{item.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">{item.period}</span>
                      <span className="text-xs font-medium text-muted-foreground">{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent text-accent-foreground rounded-xl">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map(item => (
                  <div key={item.id} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent-foreground before:rounded-full">
                    <h4 className="font-semibold text-foreground mb-1">{item.course}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                    <div className="mt-2 text-xs font-medium text-muted-foreground">
                      {item.year} &bull; {item.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.3}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-muted text-foreground rounded-xl border border-border/50">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map(lang => (
                  <div key={lang.name} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs font-semibold px-2 py-1 bg-muted rounded text-muted-foreground">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
