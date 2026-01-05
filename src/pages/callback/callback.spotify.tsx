/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { useSpotifyAuth } from '@/hooks/useSpotifyAuth';
import { ROUTES } from '@/constants/routes.constants';

const SpotifyCallbackPage = () => {
  const { isAuthenticated } = useAuth();
  const { saveToken, exchangeCodeForToken } = useSpotifyAuth();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const fetchAccessToken = async (code: string) => {
    try {
      const tokenData = await exchangeCodeForToken(code);

      if (!tokenData?.access_token) {
        navigate(ROUTES.NOT_FOUND);
        return;
      }

      saveToken(tokenData);
      navigate(ROUTES.SEARCH);
    } catch (error) {
      console.error('Error fetching access token:', error);
      navigate(ROUTES.NOT_FOUND);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate(ROUTES.SEARCH);
    if (code) fetchAccessToken(code);
  }, [code, isAuthenticated]);

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="animate-spin -ml-1 mr-3 h-10 w-10 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span>Cargando...</span>
    </div>
  );
};

export default SpotifyCallbackPage;
