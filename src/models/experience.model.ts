export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Developer / Full-Stack Developer",
    company: "Workeazi Pvt. Ltd.",
    location: "Coimbatore, India",
    period: "2026 – Present",
    highlights: [
      "Developed React web applications and Flutter mobile apps, integrating APIs, authentication, databases, and backend services.",
      "Worked with Supabase and Firebase for database, authentication, storage, and cloud-based functionality.",
      "Deployed websites on Yash Host and managed Android app releases through Google Play Console.",
      "Set up Linux servers, Cloudflare Tunnel, and NGINX reverse proxy/load balancing for self-hosted applications."
    ]
  },
  {
    id: "exp-2",
    role: "Flutter Developer",
    company: "Caxita Tech Solutions Pvt. Ltd.",
    location: "Coimbatore, India",
    period: "2025 – 2026",
    highlights: [
      "Architected and deployed 4+ cross-platform mobile apps using Flutter (Dart) for Android and iOS, achieving 99.5% crash-free sessions and a 4.8 average app store rating.",
      "Applied MVC and MVVM patterns with clean code principles, reducing technical debt by 40% and improving scalability and maintainability.",
      "Integrated and optimized RESTful APIs and GraphQL services, achieving sub-500 ms response times for booking and payment transactions.",
      "Built and scaled B2C travel applications supporting 50,000+ monthly transactions, including multi-currency payment gateways and Arabic (RTL) localization."
    ]
  },
  {
    id: "exp-3",
    role: "Django Developer",
    company: "GrapesGenix Pvt. Ltd.",
    location: "Thrissur, India (Remote)",
    period: "2024 – 2025",
    highlights: [
      "Architected and deployed 2+ full-stack web apps using Python and Django, including a college website and an e-learning platform.",
      "Designed and implemented RESTful backend APIs using Django REST Framework with optimized query handling.",
      "Contributed to end-to-end development during internship, collaborating on backend API design and frontend integration."
    ]
  }
];
