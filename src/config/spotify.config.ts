import { env } from './env.config';
import {
  SPOTIFY_AUTHORIZE_URL,
  SPOTIFY_SCOPES,
} from '@/constants/api.constants';
import { ROUTES } from '@/constants/routes.constants';

export const getSpotifyAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: env.VITE_SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: `${env.VITE_URL_PRODUCTION_APP}${ROUTES.CALLBACK}`,
    scope: SPOTIFY_SCOPES.join(' '),
  });

  return `${SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
};

export const getSpotifyRedirectUri = (): string => {
  return `${env.VITE_URL_PRODUCTION_APP}${ROUTES.CALLBACK}`;
};
