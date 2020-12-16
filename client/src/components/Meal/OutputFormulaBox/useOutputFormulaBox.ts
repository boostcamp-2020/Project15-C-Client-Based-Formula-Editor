import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MathField } from 'boost-mathquill';
import { editLatex, initLatex } from '@contexts/latex';
import { RootState } from '@contexts/index';
import useCurrentTab from '@hooks/useCurrentTab';

const useOutputFormulaBox = () => {
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

  const onKeyDownHandler = (e: any) => {
    if (e.key === 'Enter') {
      mathfield?.write('\\newline ');
    }
  };

  return {
    currentTabInfo,
    initmathInput,
    onChangeHandler,
    mathfieldRef,
    onKeyDownHandler,
  };
};

export default useOutputFormulaBox;
