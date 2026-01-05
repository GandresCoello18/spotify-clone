import { createSpotifyClient } from '@/lib/spotify-client';
import type { SpotifyResultAlbumModel } from '@/types/spotify.types';

export interface GetSearchAlbumParams {
  token: string;
  artist: string;
  limit: number;
  offset: number;
}

export const getSearchAlbum = async (
  params: GetSearchAlbumParams,
): Promise<SpotifyResultAlbumModel> => {
  const { token, artist, limit, offset } = params;
  const client = createSpotifyClient(token);

  const query = encodeURIComponent(`remaster artist:${artist}`);
  return client.get<SpotifyResultAlbumModel>(
    `/v1/search?q=${query}&type=album&limit=${limit}&offset=${offset}`,
  );
};
