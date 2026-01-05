// Authorization types
export type TokenSpotify = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};

// Album types
export type SpotifyResultAlbumModel = {
  albums: AlbumsModel;
};

export type AlbumsModel = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: number;
  total: number;
  items: ItemResultAlbumModel[];
};

export type ItemResultAlbumModel = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ItemExternalUrlsModel;
  href: string;
  isAdded?: boolean;
  id: string;
  images: ItemImageModel[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: ItemArtistsModel[];
};

export type ItemImageModel = {
  height: number;
  url: string;
  width: number;
};

export type ItemArtistsModel = {
  external_urls: ItemExternalUrlsModel;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type ItemExternalUrlsModel = {
  spotify: string;
};

// Artist types
export type ArtistsModel = {
  external_urls: ArtistsExternalUrlsModel;
  followers: ArtistFollowersModel;
  genres: string[];
  href: string;
  id: string;
  images: ArtistImageModel[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type ArtistsExternalUrlsModel = {
  spotify: string;
};

export type ArtistFollowersModel = {
  href: string | null;
  total: number;
};

export type ArtistImageModel = {
  url: string;
  height: number;
  width: number;
};

// Me Albums types
export type MeAlbumsModel = {
  href: string;
  items: MeItemAlbumModel[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

export type MeItemAlbumModel = {
  added_at: string;
  album: MeAlbumModel;
};

export type MeAlbumModel = {
  album_type: string;
  total_tracks: number;
  is_playable: boolean;
  external_urls: AlbumExternalUrlsModel;
  href: string;
  id: string;
  images: AlbumImageModel[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: ArtistByAlbumModel[];
  tracks: MeAlbumTracksModel;
  copyrights: MeAlbumCopyrightModel[];
  external_ids: MeAlbumExternalIdsModel;
  genres: string[];
  label: string;
  popularity: number;
};

export type AlbumImageModel = {
  url: string;
  height: number;
  width: number;
};

export type ArtistByAlbumModel = {
  external_urls: AlbumExternalUrlsModel;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type MeAlbumTracksModel = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: MeAlbumTrackItemModel[];
};

export type MeAlbumTrackItemModel = {
  artists: MeAlbumTrackArtistModel[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: AlbumExternalUrlsModel;
  href: string;
  id: string;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type MeAlbumTrackArtistModel = {
  external_urls: AlbumExternalUrlsModel;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type MeAlbumCopyrightModel = {
  text: string;
  type: string;
};

export interface MeAlbumExternalIdsModel {
  upc: string;
}

export type AlbumExternalUrlsModel = {
  spotify: string;
};
