import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

import {commonState, Mode} from '../states/common';

export const useCommon = () => {
  const [common, setCommon] = useRecoilState(commonState);

  const setCountColumn = (value: number) => {
    setCommon((prev) => ({...prev, column: value}));
  };

  const setMode = (value: Mode) => {
    setCommon((prev) => ({...prev, mode: value}));
  };

  const handleChange = (value: string) => {
    setCountColumn(Number(value));
    localStorage.setItem('column', value);
  };

  const handleChangeMode = (value: Mode) => {
    setMode(value);
    localStorage.setItem('mode', value);
  };

  useEffect(() => {
    const column = localStorage.getItem('column');
    if (!column) {
      return setCountColumn(3);
    }
    if (column && Number(column) !== common.column) {
      setCountColumn(Number(column));
    }
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (!mode) {
      return setMode(Mode.PAGE);
    }
    if (mode && mode !== common.mode) {
      setMode(mode as Mode);
    }
  }, []);

  return {countColumn: common.column, handleChange, mode: common.mode, handleChangeMode};
};
