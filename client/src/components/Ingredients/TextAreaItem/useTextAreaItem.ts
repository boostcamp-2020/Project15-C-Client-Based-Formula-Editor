import { useDispatch } from 'react-redux';
import { editLatex } from '../../../contexts/latex';
import useCurrentTab from '@hooks/useCurrentTab';

const useTextAreaItem = () => {
  const dispatch = useDispatch();
  const { currentTabInfo } = useCurrentTab();

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(editLatex({ latex: e.target.value }));
  };

  return { currentTabInfo, onChangeHandler };
};

export default useTextAreaItem;
