import { CheckCircleSvg } from '@/components/svg/check.circle.svg';
import type { ArtistsModel } from '@/types/spotify.types';

type PropsArtistDetail = {
  artist: ArtistsModel;
};

export const ArtistDetail = ({ artist }: PropsArtistDetail) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 max-w-4xl w-full">
      <img
        src={artist?.images[0].url}
        alt={artist?.name}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
      />

      <div className="text-white">
        <div className="flex items-center gap-2 text-secondary text-lg">
          <CheckCircleSvg data-testid="certified-icon" />
          <span className="text-white">Artista certificado</span>
        </div>

        <h1 className="text-3xl font-bold mt-2">{artist?.name}</h1>

        <div className="mt-4">
          <p className="text-gray-400 text-md mt-2">
            <span className="font-bold">
              Followers: {artist?.followers.total.toLocaleString()}
            </span>
          </p>

          <p className="text-gray-400 text-md">
            <span className="font-bold">
              Oyentes mensuales: {artist?.popularity.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
