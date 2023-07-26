export interface IPhoto {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string;
  width: number;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ILinks;
  promoted_at: string;
  slug: string;
  sponsorship: string;
  updated_at: string;
  urls: IUrls;
  user: IUser;
  views: number;
  downloads: number;
  tags: ITag[];
  tags_preview: ITag[];
  isInCollection: boolean;
}

interface ITag {
  title: string;
  type: string;
}

interface ILinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

interface IUser {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  links: ILinks;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: IProfileImage;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

interface IProfileImage {
  large: string;
  medium: string;
  small: string;
}

export interface ISearchPhotos {
  results: IPhoto[];
  total: number;
  total_pages: number;
}
