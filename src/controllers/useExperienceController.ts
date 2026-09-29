import { useState, useEffect } from 'react';
import { experienceData, ExperienceItem } from '@/models/experience.model';

export function useExperienceController(): { experience: ExperienceItem[]; isLoading: boolean } {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExperience(experienceData);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return { experience, isLoading };
}
