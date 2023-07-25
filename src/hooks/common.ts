import {useRecoilState} from 'recoil';

import {commonState} from '../states/common';

export const useCommon = () => {
  const [common, setCommon] = useRecoilState(commonState);

  const setCountColumn = (value: number) => {
    setCommon((prev) => ({...prev, column: value}));
  };

  const handleChange = (value: string) => {
    setCountColumn(Number(value));
  };

  return {countColumn: common.column, handleChange};
};
