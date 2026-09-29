import { useProfileController } from '@/controllers/useProfileController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';

export function AboutSection() {
  const { profile, isLoading } = useProfileController();

  if (isLoading) return null;

  return (
    <section id={sectionIds.about} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="About Me" 
            subtitle="A brief introduction to who I am and what I do." 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>{profile.summary}</p>
              </div>
            </Reveal>
          </div>
          
          <div className="md:col-span-4">
            <Reveal delay={0.2}>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
                  <p className="text-sm font-medium text-muted-foreground">Companies Worked For</p>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">4+</h3>
                  <p className="text-sm font-medium text-muted-foreground">Apps Shipped</p>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">50k+</h3>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Transactions Supported</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
