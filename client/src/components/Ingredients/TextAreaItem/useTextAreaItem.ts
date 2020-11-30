import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../contexts';
import { editLatex } from '../../../contexts/latex';

const useTextAreaItem = () => {
  const dispatch = useDispatch();
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const currentText = totalLatex.filter((tabinfo) => tabinfo.id === currentTab)[0].latex;

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(editLatex(e.target.value));
  };

  return { currentText, onChangeHandler };
};

export default useTextAreaItem;
