import { useState, useEffect } from 'react';
import { projectsData, ProjectItem } from '@/models/projects.model';

export function useProjectsController(): { projects: ProjectItem[]; isLoading: boolean } {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return { projects, isLoading };
}
