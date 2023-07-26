export interface IUser {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
  collections: IUserCollection[];
  email: string;
}

export interface IUserCollection {
  id: string;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: {
    id: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
  };
  user: IUser;
  links: {
    self: string;
    html: string;
    photos: string;
    related: string;
  };
}
