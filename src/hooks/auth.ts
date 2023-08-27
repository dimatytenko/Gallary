import {useEffect, useState} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useSetRecoilState} from 'recoil';

import {authQuery, userQuery} from '../queries/auth';
import {route} from '../constants/routes';
import {IUser} from '../types/user';
import {session} from '../states/session';
import {getCollectionsQuery} from '../queries/collection';

type TokenType = string | null | undefined;

export const getToken = (): TokenType => {
  return Cookies.get('id_token');
};

export const setToken = (token: TokenType, expires?: number): TokenType | void => {
  if (!token) {
    return Cookies.remove('id_token');
  }
  return Cookies.set('id_token', token, {expires: expires || 365});
};

export const useCheckAuthorize = () => async () => {
  try {
    const res = await userQuery();
    if (res.body) return res.body as IUser;
    return false;
  } catch (e) {
    return false;
  }
};

export const useAuth = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const checkAuth = useCheckAuthorize();
  const setSession = useSetRecoilState(session);
  const navigate = useNavigate();

  const fetchAuth = async () => {
    try {
      if (!searchParams.get('code')) return;
      const res = await authQuery(searchParams.get('code') || '');
      setToken(res.body.access_token);
      const user = await checkAuth();

      if (user && res.body) {
        const collections = await getCollectionsQuery(user.username);
        setSession({sessionToken: res.body.access_token, user: {...user, collections: collections.body}});
      }
      navigate(route.main.path);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuth();
  }, [searchParams.get('code')]);

  return {isLoading};
};

export function useFetchSession() {
  const [loading, setLoading] = useState(true);
  const checkAuth = useCheckAuthorize();
  const setSession = useSetRecoilState(session);
  const token = getToken();

  useEffect(() => {
    const setAuthorize = async () => {
      setLoading(true);
      if (!token) return setLoading(false);
      const res = await checkAuth();
      if (res) {
        const collections = await getCollectionsQuery(res.username);
        setSession({sessionToken: token, user: {...res, collections: collections.body}});
        setLoading(false);
      } else {
        setSession(null);
        setLoading(false);
      }
    };
    setAuthorize();
  }, []);

  return {loading};
}

export const useLogOut = () => {
  const setSession = useSetRecoilState(session);

  return async () => {
    setToken(null);
    setSession(null);
  };
};
