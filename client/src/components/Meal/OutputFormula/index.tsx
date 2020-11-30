import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import useContent from './useOutputFormula';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import * as S from './style';

function OutputFormula() {
  const { initmathInput, nowLatexInfo, onChangeHandler, onClickHandler } = useContent();
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const currentFormat = totalLatex[currentTab];
  const { fontSize, textAlign } = currentFormat;

  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox fontSize={fontSize} textAlign={textAlign}>
        <EditableMathField
          mathquillDidMount={initmathInput}
          latex={nowLatexInfo.latex}
          onChange={onChangeHandler}
        />
      </S.OutputFormulaBox>
    </S.OutputFormulaWrapper>
  );
}
export default OutputFormula;
