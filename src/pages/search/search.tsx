import { AlbumCard, AlbumUpdateAction } from '@/components/album/AlbumCard';
import { AlbumCardSkeleton } from '@/components/album/AlbumCardSkeleton';
import { Pagination } from '@/components/Pagination';
import { toast } from 'react-toast';
import { useDebouncedCallback } from 'use-debounce';
import useAuth from '@/hooks/useAuth';
import type { ItemResultAlbumModel } from '@/types/spotify.types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoResults } from '@/components/NoResults';
import { albumActionService } from '@/services/album/album.service';
import { searchAlbumsService } from '@/services/search/search.service';
import { ROUTES } from '@/constants/routes.constants';

const SearchPage = () => {
  const { userToken } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [albums, setAlbums] = useState<ItemResultAlbumModel[]>([]);

  const handleChangeSearch = useDebouncedCallback((value) => {
    setSearch(value);
  }, 1000);

  const fetchResultSearch = useCallback(async () => {
    if (!search.trim()) {
      setAlbums([]);
      setTotalResults(0);
      setPages(1);
      return;
    }

    setLoading(true);

    try {
      const limit = 4;
      const offset = currentPage > 1 ? (currentPage - 1) * limit : 0;

      const result = await searchAlbumsService({
        token: userToken,
        artist: search,
        limit,
        offset,
      });

      setAlbums(result.albums);
      setTotalResults(result.total);
      setPages(result.pages);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Error al buscar álbumes';
      toast.error(message);
      navigate(ROUTES.NOT_FOUND);
    } finally {
      setLoading(false);
    }
  }, [currentPage, search, userToken, navigate]);

  useEffect(() => {
    fetchResultSearch();
  }, [fetchResultSearch]);

  const handleUpdateAlbum = async (paramsClick: AlbumUpdateAction) => {
    const success = await albumActionService({
      userToken,
      ...paramsClick,
    });

    if (success) {
      const updateAlbums = albums.map((album) => {
        if (paramsClick.albumId === album.id) {
          return {
            ...album,
            isAdded: !paramsClick.isAdded,
          };
        }
        return album;
      });

      setAlbums(updateAlbums);
    }
  };

  return (
    <div className="min-h-screen bg-primary px-4">
      <section className="flex flex-col justify-center items-center">
        <div className="w-full md:w-1/2 p-2 text-start md:text-center md:mt-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-10">
            Busca tus
            <span className="text-secondary block">artistas</span>
          </h1>

          <span className="text-gray-400 max-w-lg">
            Encuentra tus artistas favoritos gracias a nuestro buscador y guarda
            tus álbumes favoritos
          </span>
        </div>

        <div className="relative w-full max-w-lg mt-6">
          <input
            type="text"
            defaultValue={search}
            placeholder="Buscar canciones, artistas..."
            className="w-full py-3 pl-4 pr-12 rounded-full bg-white text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
          <button
            type="button"
            className="absolute cursor-pointer right-3 top-1/2 font-bold px-5 transform -translate-y-1/2 bg-secondary text-black p-2 rounded-full hover:bg-secondary/80"
            onClick={fetchResultSearch}
          >
            Search
          </button>
        </div>
      </section>

      <section className="mt-5 p-2 w-full flex justify-center">
        <div className="mt-5 text-white">
          <div className="mb-5">
            <span>
              Mostrando <span className="font-bold">{albums.length}</span>{' '}
              resultados de <span className="font-bold">{totalResults}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading
              ? ['0', '1', '2', '3'].map((item) => (
                  <AlbumCardSkeleton key={item} />
                ))
              : albums.map((album) => (
                  <AlbumCard
                    key={album.id}
                    id={album.id}
                    hrefUrl={`/artist/${album.artists[0].id}`}
                    image={album.images[0].url}
                    name={album.name}
                    isAdded={album.isAdded}
                    published={album.release_date}
                    handleClick={(paramsClick) =>
                      handleUpdateAlbum(paramsClick)
                    }
                  />
                ))}
          </div>

          {!loading && !albums.length ? <NoResults /> : null}

          {albums.length ? (
            <div className="my-5 p-2 flex justify-start">
              <Pagination
                currentPage={currentPage}
                totalPages={pages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
