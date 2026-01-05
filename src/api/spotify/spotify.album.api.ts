import { createSpotifyClient } from '@/lib/spotify-client';
import type { AlbumsModel, MeAlbumsModel } from '@/types/spotify.types';

export interface GetAlbumsByArtistParams {
  token: string;
  artistId: string;
  limit: number;
  offset: number;
}

export interface GetMeAlbumsParams {
  token: string;
  limit: number;
  offset: number;
}

export interface GetMeSavedAlbumsParams {
  token: string;
  ids: string[];
}

export interface AlbumActionParams {
  token: string;
  ids: string[];
}

export const getAlbumsByArtist = async (
  params: GetAlbumsByArtistParams,
): Promise<AlbumsModel> => {
  const { token, artistId, limit, offset } = params;
  const client = createSpotifyClient(token);

  return client.get<AlbumsModel>(
    `/v1/artists/${artistId}/albums?limit=${limit}&offset=${offset}`,
  );
};

export const getMeAlbums = async (
  params: GetMeAlbumsParams,
): Promise<MeAlbumsModel> => {
  const { token, limit, offset } = params;
  const client = createSpotifyClient(token);

  return client.get<MeAlbumsModel>(
    `/v1/me/albums?limit=${limit}&offset=${offset}&market=ES`,
  );
};

export const getMeSavedAlbums = async (
  params: GetMeSavedAlbumsParams,
): Promise<boolean[]> => {
  const { token, ids } = params;
  const client = createSpotifyClient(token);

  return client.get<boolean[]>(`/v1/me/albums/contains?ids=${ids.join(',')}`);
};

export const addAlbum = async (params: AlbumActionParams): Promise<void> => {
  const { token, ids } = params;
  const client = createSpotifyClient(token);

  await client.put(`/v1/me/albums`, { ids });
};

export const removeAlbum = async (params: AlbumActionParams): Promise<void> => {
  const { token, ids } = params;
  const client = createSpotifyClient(token);

  await client.delete(
    `/v1/me/albums`,
    { ids },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
