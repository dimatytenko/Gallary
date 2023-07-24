import superagent from 'superagent';
import {SERVER_URL, CLIENT_ID} from '../constants/env';

export const getQuery = (query: string, page?: string | null, perPage?: string | null, tag?: string | null) => {
  return superagent.get(
    `${SERVER_URL}${query}?client_id=${CLIENT_ID}&per_page=${perPage || 15}${page ? `&page=${page}` : ''}${
      tag ? `&query=${tag}` : ''
    }`,
  );
};
