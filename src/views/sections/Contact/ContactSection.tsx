import { useContactController } from '@/controllers/useContactController';
import { sectionIds } from '@/config/routes';
import { Reveal } from '@/views/components/Reveal';
import { SectionHeading } from '@/views/components/SectionHeading';
import { Button } from '@/views/components/Button';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactSection() {
  const { formData, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactController();

  return (
    <section id={sectionIds.contact} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a project in mind or want to explore opportunities? Let's talk." 
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div>
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background border border-border rounded-xl text-primary shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.social.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background border border-border rounded-xl text-primary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Phone</h4>
                    <a href={`tel:${siteConfig.social.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {siteConfig.social.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background border border-border rounded-xl text-primary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>

              {isSuccess && (
                <p className="text-sm text-green-600 font-medium text-center mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
