export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  id: string;
  course: string;
  institution: string;
  location: string;
  year: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Diploma in Computer Engineering",
    institution: "Model Polytechnic College Karunagappally",
    location: "Kollam, India",
    period: "2022–2025",
    score: "CGPA 9.4/10"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    course: "Flutter Development Course",
    institution: "Luminar Technolab",
    location: "Kochi, India",
    year: "2025"
  }
];

export const languagesData: LanguageItem[] = [
  { name: "Malayalam", proficiency: "Fluent" },
  { name: "Tamil", proficiency: "Fluent" },
  { name: "English", proficiency: "Fluent" }
];
