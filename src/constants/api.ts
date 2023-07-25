export const authQueryList = {
  auth: () => '/oauth/authorize',
  token: () => '/oauth/token',
};

export const userQueryList = {
  me: () => '/me',
};

export const photoQueryList = {
  photos: () => '/photos',
  photo: (id: string) => `/photos/${id}`,
  searchPhotos: () => '/search/photos',
  topics: () => '/topics',
};
