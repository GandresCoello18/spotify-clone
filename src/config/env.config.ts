const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env = {
  VITE_SPOTIFY_CLIENT_ID: getEnvVar('VITE_SPOTIFY_CLIENT_ID'),
  VITE_SPOTIFY_CLIENT_SECRET: getEnvVar('VITE_SPOTIFY_CLIENT_SECRET'),
  VITE_URL_PRODUCTION_APP: getEnvVar('VITE_URL_PRODUCTION_APP'),
} as const;
