import { useDispatch } from 'react-redux';
import useCurrentTab from '@hooks/useCurrentTab';
import { editLatex } from '@contexts/latex';

const useFontColorMenu = () => {
  const { currentTabInfo } = useCurrentTab();
  const dispatch = useDispatch();

  const handleChangeComplete = (fontColor: string) => {
    dispatch(editLatex({ fontColor: fontColor }));
  };
  return {
    currentTabInfo,
    handleChangeComplete,
  };
};

export default useFontColorMenu;
