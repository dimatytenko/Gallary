import {atom, selector} from 'recoil';
import {IUser} from '../types/user';

export interface SessionType {
  sessionToken: string;
  user: IUser;
}

export type SessionStateType = SessionType | null | undefined;

export const session = atom<SessionStateType>({
  key: 'session',
  default: undefined,
});

export const userState = selector<IUser | null>({
  key: 'user',
  get: ({get}) => {
    const s = get(session);
    if (!s) {
      return null;
    }
    return s.user;
  },
  set: ({set, get}, newValue) => {
    const s = get(session);
    if (!s) {
      return null;
    }

    set(session, {...s, user: {...s.user, ...newValue}});
  },
});
