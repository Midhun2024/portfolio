import { useState, useEffect } from 'react';
import { profileData, ProfileData } from '@/models/profile.model';

export function useProfileController(): { profile: ProfileData; isLoading: boolean } {
  const [profile, setProfile] = useState<ProfileData>(profileData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network fetch
    const timer = setTimeout(() => {
      setProfile(profileData);
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return { profile, isLoading };
}
