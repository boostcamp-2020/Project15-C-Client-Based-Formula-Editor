import { MathField } from 'boost-mathquill';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex, initLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts';

const useContent = () => {
  const dispatch = useDispatch();
  const { currentTab, totalLatex, mathfield } = useSelector((state: RootState) => state.latex);
  const nowLatexInfo = totalLatex.filter((latex) => latex.id === currentTab)[0];

  const initmathInput = (mathField: MathField) => {
    dispatch(initLatex(mathField));
  };
  const onChangeHandler = (mathField: MathField) => {
    dispatch(editLatex(mathField.latex()));
  };
  const onClickHandler = () => {
    if (mathfield) mathfield.focus();
  };

  return {
    nowLatexInfo,
    initmathInput,
    onChangeHandler,
    onClickHandler,
  };
};

export default useContent;
