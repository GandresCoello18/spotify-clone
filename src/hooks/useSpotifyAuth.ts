import { useCallback } from 'react';
import { setCookie } from 'react-use-cookie';
import { STORAGE_KEYS } from '@/constants/storage.constants';
import { getAccessTokenSpotify } from '@/api/spotify/spotify.authorization.api';
import type { TokenSpotify } from '@/types/spotify.types';

interface UseSpotifyAuthReturn {
  saveToken: (tokenData: TokenSpotify) => void;
  exchangeCodeForToken: (code: string) => Promise<TokenSpotify>;
}

/**
 * Hook to manage Spotify authentication
 */
export const useSpotifyAuth = (): UseSpotifyAuthReturn => {
  const saveToken = useCallback((tokenData: TokenSpotify) => {
    const expirationTime = Date.now() + tokenData.expires_in * 1000;

    setCookie(
      STORAGE_KEYS.SPOTIFY_TOKEN_EXPIRATION,
      expirationTime.toString(),
      {
        days: 1,
      },
    );
    setCookie(STORAGE_KEYS.SPOTIFY_TOKEN, tokenData.access_token, {
      days: 1,
    });
  }, []);

  const exchangeCodeForToken = useCallback(
    async (code: string): Promise<TokenSpotify> => {
      return getAccessTokenSpotify({ code });
    },
    [],
  );

  return {
    saveToken,
    exchangeCodeForToken,
  };
};
