import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import useContent from './useOutputFormula';
import * as S from './style';

function OutputFormula() {
  const { initmathInput, nowLatexInfo, onChangeHandler, onClickHandler } = useContent();

  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox>
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
