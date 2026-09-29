import { useExperienceController } from '@/controllers/useExperienceController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';

export function ExperienceSection() {
  const { experience, isLoading } = useExperienceController();

  if (isLoading) return null;

  return (
    <section id={sectionIds.experience} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey and previous roles." 
          />
        </Reveal>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-primary absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-foreground">{item.role}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full self-start md:self-auto shrink-0">
                      {item.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{item.location}</p>
                  <ul className="space-y-2 text-muted-foreground text-sm list-none">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
