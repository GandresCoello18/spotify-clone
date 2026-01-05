import { getArtistById } from '@/api/spotify/spotify.artist.api';
import { getAlbumsByArtist } from '@/api/spotify/spotify.album.api';
import type { ArtistsModel, AlbumsModel } from '@/types/spotify.types';

export interface GetArtistDetailsParams {
  token: string;
  artistId: string;
}

export interface GetArtistAlbumsParams {
  token: string;
  artistId: string;
  limit: number;
  offset: number;
}

export interface ArtistDetailsResult {
  artist: ArtistsModel;
  albums: AlbumsModel;
}

/**
 * Service to get artist details with albums
 */
export const getArtistDetailsService = async (
  params: GetArtistDetailsParams,
): Promise<ArtistsModel> => {
  const { token, artistId } = params;
  return getArtistById({ token, artistId });
};

/**
 * Service to get artist albums
 */
export const getArtistAlbumsService = async (
  params: GetArtistAlbumsParams,
): Promise<AlbumsModel> => {
  const { token, artistId, limit, offset } = params;
  return getAlbumsByArtist({ token, artistId, limit, offset });
};
