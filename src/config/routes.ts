export const routes = {
  home: '/',
  notFound: '*',
} as const;

export const sectionIds = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  education: 'education',
  contact: 'contact',
} as const;

export const navItems = [
  { label: 'About', href: `#${sectionIds.about}` },
  { label: 'Skills', href: `#${sectionIds.skills}` },
  { label: 'Experience', href: `#${sectionIds.experience}` },
  { label: 'Projects', href: `#${sectionIds.projects}` },
  { label: 'Education', href: `#${sectionIds.education}` },
  { label: 'Contact', href: `#${sectionIds.contact}` },
];
