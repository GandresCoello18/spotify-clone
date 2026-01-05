import {
  addAlbum,
  getMeAlbums,
  getMeSavedAlbums,
  removeAlbum,
} from '@/api/spotify/spotify.album.api';
import { toast } from 'react-toast';

export interface AlbumActionParams {
  userToken: string;
  albumId: string;
  isAdded: boolean;
}

export interface GetMeAlbumsServiceParams {
  userToken: string;
  limit: number;
  offset: number;
}

export interface CheckSavedAlbumsParams {
  userToken: string;
  albumIds: string[];
}

/**
 * Service to handle album actions (add/remove)
 */
export const albumActionService = async (
  params: AlbumActionParams,
): Promise<boolean> => {
  const { userToken, albumId, isAdded } = params;

  try {
    if (isAdded) {
      await removeAlbum({ token: userToken, ids: [albumId] });
      toast.success('Álbum removido');
    } else {
      await addAlbum({ token: userToken, ids: [albumId] });
      toast.success('Álbum guardado');
    }
    return true;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Error al procesar la acción del álbum';
    toast.error(message);
    return false;
  }
};

/**
 * Service to get user's saved albums
 */
export const getMeAlbumsService = async (params: GetMeAlbumsServiceParams) => {
  const { userToken, limit, offset } = params;
  return getMeAlbums({ token: userToken, limit, offset });
};

/**
 * Service to check which albums are saved
 */
export const checkSavedAlbumsService = async (
  params: CheckSavedAlbumsParams,
): Promise<boolean[]> => {
  const { userToken, albumIds } = params;
  return getMeSavedAlbums({ token: userToken, ids: albumIds });
};
