import { siteConfig } from '@/config/site';

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  github: string;
  linkedin: string;
  availabilityChip: string;
}

export const profileData: ProfileData = {
  name: "Midhun M",
  title: "Flutter & Full-Stack Developer",
  location: "Kollam, India",
  phone: "+91 7736608797",
  email: "kmidhun698@gmail.com",
  summary: "Software Developer with hands-on experience building cross-platform mobile and web applications using Flutter, React, and modern backend technologies. Proficient in MVVM and MVC architectures, state management with Provider and BLoC, and API integration. Experienced with Supabase, Firebase, Django, and RESTful APIs, along with Linux server setup, website hosting, Cloudflare Tunnel, NGINX reverse proxy and load balancing. Skilled in application deployment, Google Play Store publishing, and performance testing using k6. Focused on building scalable, reliable, high-performance applications across development, deployment, and infrastructure.",
  github: siteConfig.social.github,
  linkedin: siteConfig.social.linkedin,
  availabilityChip: "Open to work"
};
