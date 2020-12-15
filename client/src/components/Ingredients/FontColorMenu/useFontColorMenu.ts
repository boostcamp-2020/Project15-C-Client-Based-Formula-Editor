import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import useCurrentTab from '@hooks/useCurrentTab';

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
