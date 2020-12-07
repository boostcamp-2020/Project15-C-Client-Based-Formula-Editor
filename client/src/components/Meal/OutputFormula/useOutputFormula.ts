import { MathField } from 'boost-mathquill';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex, initLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts';
import useCurrentTab from '@hooks/useCurrentTab';
import { useRef } from 'react';

const useContent = () => {
  const dispatch = useDispatch();
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const { currentTabInfo } = useCurrentTab();
  const mathfieldRef = useRef<HTMLDivElement | null>(null);

  const initmathInput = (mathField: MathField) => {
    dispatch(initLatex({ mathfield: mathField, mathfieldRef: mathfieldRef.current }));
  };
  const onChangeHandler = (mathField: MathField) => {
    dispatch(editLatex({ latex: mathField.latex() }));
  };
  const onClickHandler = () => {
    if (mathfield) mathfield.focus();
  };
  const onKeyDownHandler = (e: any) => {
    if (e.key === 'Enter') {
      mathfield?.write('\\newline ');
    }
  };
  return {
    currentTabInfo,
    initmathInput,
    onChangeHandler,
    onClickHandler,
    mathfieldRef,
    onKeyDownHandler,
  };
};

export default useContent;
