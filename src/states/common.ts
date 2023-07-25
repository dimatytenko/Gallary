import {atom} from 'recoil';

export type commonStateT = {
  column: number;
  topics: string[];
};

export const commonState = atom<commonStateT>({
  key: 'common',
  default: {
    column: 3,
    topics: [],
  },
});
