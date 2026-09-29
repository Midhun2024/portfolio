import { useState, useEffect } from 'react';
import { 
  educationData, certificationsData, languagesData, 
  EducationItem, CertificationItem, LanguageItem 
} from '@/models/education.model';

export function useEducationController(): { 
  education: EducationItem[]; 
  certifications: CertificationItem[]; 
  languages: LanguageItem[]; 
  isLoading: boolean;
} {
  const [data, setData] = useState({
    education: [] as EducationItem[],
    certifications: [] as CertificationItem[],
    languages: [] as LanguageItem[],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        education: educationData,
        certifications: certificationsData,
        languages: languagesData,
      });
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return { ...data, isLoading };
}
