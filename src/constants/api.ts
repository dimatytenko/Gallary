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

export const collectionQueryList = {
  collections: () => '/collections',
  userCollections: (username: string) => `/users/${username}/collections`,
  collection: (id: string) => `/collections/${id}/photos`,
  addToCollection: (collectionId: string) => `/collections/${collectionId}/add`,
  removeFromCollection: (id: string) => `/collections/${id}/remove`,
};
