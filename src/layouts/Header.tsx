import { BrightnessSvg } from '@/components/svg/brightness .svg';
import { ExitSvg } from '@/components/svg/exit.svg';
import useAuth from '@/hooks/useAuth';
import { removeCookie } from 'react-use-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { STORAGE_KEYS } from '@/constants/storage.constants';
import { ROUTES } from '@/constants/routes.constants';

const Header = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRemoveToken = () => {
    removeCookie(STORAGE_KEYS.SPOTIFY_TOKEN);
    removeCookie(STORAGE_KEYS.SPOTIFY_TOKEN_EXPIRATION);
    navigate(ROUTES.HOME);
  };

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex gap-2">
        <span>🎵</span>
        <span className="hidden md:block">Spotify App</span>
      </Link>

      {isAuthenticated ? (
        <nav className="flex items-center">
          <Link
            to={ROUTES.SEARCH}
            className={`mx-2 ${location.pathname === ROUTES.SEARCH ? 'text-secondary' : ''}`}
          >
            Buscar
          </Link>
          <Link
            to={ROUTES.MY_ALBUMS}
            className={`mx-2 ${location.pathname === ROUTES.MY_ALBUMS ? 'text-secondary' : ''}`}
          >
            Mis álbumes
          </Link>
          <span className="mx-4">|</span>
          <span className="mx-2 p-1 cursor-pointer">
            <span className="block md:hidden" onClick={handleRemoveToken}>
              <ExitSvg />
            </span>
            <span className="hidden md:block" onClick={handleRemoveToken}>
              Cerrar sesión
            </span>
          </span>
          <div className="block md:hidden flex items-center">
            <span className="mx-4">|</span>
            <span className="mx-2 p-1 cursor-pointer">
              <BrightnessSvg />
            </span>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
