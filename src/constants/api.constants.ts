export const SPOTIFY_API_BASE_URL = 'https://api.spotify.com';
export const SPOTIFY_ACCOUNT_BASE_URL = 'https://accounts.spotify.com';
export const SPOTIFY_AUTHORIZE_URL = `${SPOTIFY_ACCOUNT_BASE_URL}/authorize`;
export const SPOTIFY_TOKEN_URL = `${SPOTIFY_ACCOUNT_BASE_URL}/api/token`;

export const SPOTIFY_SCOPES = [
  'user-read-email',
  'user-library-modify',
  'user-library-read',
  'user-read-private',
] as const;

export const SPOTIFY_API_VERSION = 'v1';
