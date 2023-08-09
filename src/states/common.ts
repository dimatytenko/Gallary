import {atom} from 'recoil';

export enum Mode {
  PAGE = 'page',
  LIST = 'list',
}

export type commonStateT = {
  column: number;
  topics: string[];
  mode?: Mode;
};

export const commonState = atom<commonStateT>({
  key: 'common',
  default: {
    column: 0,
    topics: [],
    mode: undefined,
  },
});
