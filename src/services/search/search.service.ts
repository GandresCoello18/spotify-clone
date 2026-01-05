import { getSearchAlbum } from '@/api/spotify/spotify.search.api';
import { getMeSavedAlbums } from '@/api/spotify/spotify.album.api';
import type { ItemResultAlbumModel } from '@/types/spotify.types';

export interface SearchAlbumsParams {
  token: string;
  artist: string;
  limit: number;
  offset: number;
}

export interface SearchAlbumsResult {
  albums: ItemResultAlbumModel[];
  total: number;
  pages: number;
}

/**
 * Service to search albums with saved status
 */
export const searchAlbumsService = async (
  params: SearchAlbumsParams,
): Promise<SearchAlbumsResult> => {
  const { token, artist, limit, offset } = params;

  const { albums } = await getSearchAlbum({ token, artist, limit, offset });

  if (!albums?.items?.length) {
    return {
      albums: [],
      total: 0,
      pages: 1,
    };
  }

  // Check which albums are saved
  const albumIds = albums.items.map((item) => item.id);
  const savedStatus = await getMeSavedAlbums({
    token,
    ids: albumIds,
  });

  // Merge saved status with albums
  const albumsWithStatus: ItemResultAlbumModel[] = albums.items.map(
    (album, index) => ({
      ...album,
      isAdded: savedStatus[index] || false,
    }),
  );

  const pages = Math.ceil(albums.total / limit);

  return {
    albums: albumsWithStatus,
    total: albums.total,
    pages,
  };
};
