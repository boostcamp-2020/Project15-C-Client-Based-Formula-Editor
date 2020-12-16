import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { addTab } from '@contexts/latex';

const useTab = () => {
  const dispatch = useDispatch();
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);

  const addTabHandler = useCallback(() => {
    dispatch(addTab());
  }, []);

  return { currentTab, totalLatex, addTabHandler };
};

export default useTab;
