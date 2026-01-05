import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@/pages/login/login';
import SearchPage from '@/pages/search/search';
import SpotifyCallbackPage from '@/pages/callback/callback.spotify';
import ArtistDetailsPage from '@/pages/artist/artist-details';
import NotFound from '@/pages/not-found/NotFound';
import ProtectedRoute from './ProtectedRoute';
import MyAlbumsPage from '@/pages/album/my-albums';
import PublicRoute from './PublicRoute';
import { ROUTES } from '@/constants/routes.constants';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.HOME} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.SEARCH} element={<SearchPage />} />
            <Route
              path={ROUTES.ARTIST_DETAILS}
              element={<ArtistDetailsPage />}
            />
            <Route path={ROUTES.MY_ALBUMS} element={<MyAlbumsPage />} />
          </Route>
          <Route path={ROUTES.CALLBACK} element={<SpotifyCallbackPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
