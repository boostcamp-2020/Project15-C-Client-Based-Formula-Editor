import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editLatex, initLatex } from '../../../contexts/latex';
import { RootState } from '../../../contexts/index';
import { EditableMathField, MathField } from 'boost-mathquill';
import { ContentsWrapper, ContentsBox } from './style';

function Content() {
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

  return (
    <ContentsWrapper onClick={onClickHandler}>
      <ContentsBox>
        <EditableMathField
          mathquillDidMount={initmathInput}
          latex={nowLatexInfo.latex}
          onChange={onChangeHandler}
        />
      </ContentsBox>
    </ContentsWrapper>
  );
}
export default Content;
