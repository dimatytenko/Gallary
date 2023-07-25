import {postQuery, getBearerQuery} from './hooks';
import {authQueryList, userQueryList} from '../constants/api';

export const authQuery = async (code: string) => await postQuery(authQueryList.token(), code);

export const userQuery = async () => await getBearerQuery(userQueryList.me());
