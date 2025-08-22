import { useEffect, useState } from 'react';
import { GetProfileResponse } from '../types/getProfileResponse.types';
import { getProfileHttpCall } from '../getProfileHttpCall';

export const useProfile = () => {
  const [profile, setProfile] = useState<GetProfileResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await getProfileHttpCall();
        setProfile(response);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  return {
    profile,
    loading,
  };
};
