import { useMemo } from 'react';
import { getCookie, removeCookie } from 'react-use-cookie';
import { STORAGE_KEYS } from '@/constants/storage.constants';

interface UseAuthReturn {
  isAuthenticated: boolean;
  userToken: string;
}

/**
 * Hook to manage authentication state
 * Checks if user token exists and is not expired
 */
export const useAuth = (): UseAuthReturn => {
  return useMemo(() => {
    const userToken = getCookie(STORAGE_KEYS.SPOTIFY_TOKEN, '') as string;
    const expiration = getCookie(STORAGE_KEYS.SPOTIFY_TOKEN_EXPIRATION);

    // Check if token is expired
    if (!expiration || Date.now() > parseInt(expiration, 10)) {
      removeCookie(STORAGE_KEYS.SPOTIFY_TOKEN);
      removeCookie(STORAGE_KEYS.SPOTIFY_TOKEN_EXPIRATION);
      return { isAuthenticated: false, userToken: '' };
    }

    return {
      isAuthenticated: !!userToken,
      userToken: userToken || '',
    };
  }, []);
};

export default useAuth;
