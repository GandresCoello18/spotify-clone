import { createSpotifyClient } from '@/lib/spotify-client';
import type { ArtistsModel } from '@/types/spotify.types';

export interface GetArtistByIdParams {
  token: string;
  artistId: string;
}

export const getArtistById = async (
  params: GetArtistByIdParams,
): Promise<ArtistsModel> => {
  const { token, artistId } = params;
  const client = createSpotifyClient(token);

  return client.get<ArtistsModel>(`/v1/artists/${artistId}`);
};
