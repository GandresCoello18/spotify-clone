import { createAuthenticatedClient, HttpClient } from './http-client';
import {
  SPOTIFY_API_BASE_URL,
  SPOTIFY_TOKEN_URL,
} from '@/constants/api.constants';
import { env } from '@/config/env.config';
import { getSpotifyRedirectUri } from '@/config/spotify.config';
import type { TokenSpotify } from '@/types/spotify.types';

/**
 * Creates an authenticated Spotify API client
 */
export const createSpotifyClient = (token: string): HttpClient => {
  return createAuthenticatedClient(token);
};

/**
 * Spotify Account API client for authentication endpoints
 */
class SpotifyAccountClient {
  private baseURL = SPOTIFY_TOKEN_URL;

  async getAccessToken(code: string): Promise<TokenSpotify> {
    const credentials = btoa(
      `${env.VITE_SPOTIFY_CLIENT_ID}:${env.VITE_SPOTIFY_CLIENT_SECRET}`,
    );

    const response = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: getSpotifyRedirectUri(),
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.error_description ||
          `Failed to get access token: ${response.statusText}`,
      );
    }

    return response.json();
  }
}

export const spotifyAccountClient = new SpotifyAccountClient();
