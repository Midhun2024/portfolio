import { useState, useEffect } from 'react';
import { skillsData, SkillCategory } from '@/models/skills.model';

export function useSkillsController(): { skills: SkillCategory[]; isLoading: boolean } {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(skillsData);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return { skills, isLoading };
}
