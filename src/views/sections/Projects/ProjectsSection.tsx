import { useProjectsController } from '@/controllers/useProjectsController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';
import { Smartphone, Monitor } from 'lucide-react';

export function ProjectsSection() {
  const { projects, isLoading } = useProjectsController();

  if (isLoading) return null;

  return (
    <section id={sectionIds.projects} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="Selected Projects" 
            subtitle="Showcasing some of my best work in mobile and web development." 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    {project.platforms.map(platform => (
                      <div 
                        key={platform}
                        className="p-2 bg-muted rounded-full text-muted-foreground flex items-center justify-center"
                        title={platform}
                      >
                        {platform === 'Web' ? <Monitor size={18} /> : <Smartphone size={18} />}
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-semibold px-3 py-1 bg-accent/50 text-accent-foreground rounded-full"
                    >
                      {tech}
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
