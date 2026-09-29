export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Professional",
    skills: ["Dart (Flutter)", "Python (Django)"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "State Management",
    skills: ["BLoC", "Provider"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flutter", "Django"]
  },
  {
    title: "Backend & APIs",
    skills: ["RESTful APIs", "Firebase", "Dio", "HTTP", "Supabase", "MongoDB"]
  },
  {
    title: "Performance",
    skills: ["Flutter DevTools", "Memory Profiling", "App Size Optimization", "Lazy Loading"]
  },
  {
    title: "Tools & IDEs",
    skills: ["Android Studio", "VS Code", "Postman", "Git", "GitHub", "Figma", "Photoshop", "Premiere Pro"]
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "YOLOv4", "NumPy", "OpenCV", "PyTorch"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Linux", "NGINX", "Cloudflare Tunnel", "Web Hosting", "Server Deployment"]
  },
  {
    title: "DevOps & Performance",
    skills: ["k6 Load Testing", "Reverse Proxy", "Load Balancing", "Server Performance Testing"]
  },
  {
    title: "App Deployment",
    skills: ["Google Play Console", "Android Release Management"]
  },
  {
    title: "Academic",
    skills: ["Java", "C"]
  }
];
