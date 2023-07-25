import superagent from 'superagent';
import {SERVER_URL, SERVER_AUTH_URL, CLIENT_ID, CLIENT_SECRET_ID, REDIRECT_URL} from '../constants/env';
import {getToken} from '../hooks/auth';

export const getQuery = (query: string, page?: string | null, perPage?: string | null, tag?: string | null) => {
  return superagent.get(
    `${SERVER_URL}${query}?client_id=${CLIENT_ID}&per_page=${perPage || 15}${page ? `&page=${page}` : ''}${
      tag ? `&query=${tag}` : ''
    }`,
  );
};

export const getBearerQuery = (query: string) => {
  const bearerToken = getToken();
  if (bearerToken) return superagent.get(`${SERVER_URL}${query}`).set('Authorization', 'Bearer ' + bearerToken);

  return superagent.get(`${SERVER_URL}${query}`);
};

export const postQuery = (query: string, code?: string) => {
  return superagent.post(
    `${SERVER_AUTH_URL}${query}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_ID}&redirect_uri=${REDIRECT_URL}&grant_type=authorization_code&code=${code}`,
  );
};
