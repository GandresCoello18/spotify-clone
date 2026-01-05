import { spotifyAccountClient } from '@/lib/spotify-client';
import type { TokenSpotify } from '@/types/spotify.types';

export interface GetAccessTokenParams {
  code: string;
}

export const getAccessTokenSpotify = async (
  params: GetAccessTokenParams,
): Promise<TokenSpotify> => {
  const { code } = params;
  return spotifyAccountClient.getAccessToken(code);
};
