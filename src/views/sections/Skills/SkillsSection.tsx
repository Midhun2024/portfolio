import { useSkillsController } from '@/controllers/useSkillsController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';

export function SkillsSection() {
  const { skills, isLoading } = useSkillsController();

  if (isLoading) return null;

  return (
    <section id={sectionIds.skills} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="Technical Skills" 
            subtitle="My core competencies and tools I work with on a daily basis." 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-md border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
