import { MathField } from 'boost-mathquill';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex, initLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts';
import useCurrentTab from '@hooks/useCurrentTab';

const useContent = () => {
  const dispatch = useDispatch();
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const { currentTabInfo } = useCurrentTab();

  const initmathInput = (mathField: MathField) => {
    dispatch(initLatex(mathField));
  };
  const onChangeHandler = (mathField: MathField) => {
    dispatch(editLatex({ latex: mathField.latex() }));
  };
  const onClickHandler = () => {
    if (mathfield) mathfield.focus();
  };

  return {
    currentTabInfo,
    initmathInput,
    onChangeHandler,
    onClickHandler,
  };
};

export default useContent;
