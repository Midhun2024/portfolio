export type Platform = 'Android' | 'iOS' | 'Web';

export interface ProjectItem {
  id: string;
  name: string;
  platforms: Platform[];
  tech: string[];
  description: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    name: "BookSultan",
    platforms: ["Android", "iOS"],
    tech: ["Flutter", "Dart", "REST APIs"],
    description: "Full-service travel app covering flights, hotels & packages for Middle Eastern markets."
  },
  {
    id: "proj-2",
    name: "QGO Online",
    platforms: ["Android"],
    tech: ["Flutter", "Dart", "MVVM"],
    description: "Package-based travel app with airline, hotel & holiday package bookings using MVVM architecture."
  },
  {
    id: "proj-3",
    name: "QGO Jazeera / Vantage",
    platforms: ["Android", "iOS"],
    tech: ["Flutter"],
    description: "Integrated booking solution providing streamlined access to exclusive airline holiday packages."
  },
  {
    id: "proj-4",
    name: "College Website",
    platforms: ["Web"],
    tech: ["Django", "Python", "HTML/CSS"],
    description: "Digital platform for academic information, course offerings, and institutional resources for students, faculty, and applicants."
  }
];
