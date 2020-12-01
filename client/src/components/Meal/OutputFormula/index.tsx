import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import useContent from './useOutputFormula';
import * as S from './style';

function OutputFormula() {
  const { initmathInput, currentTabInfo, onChangeHandler, onClickHandler } = useContent();
  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;

  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox fontSize={fontSize} fontColor={fontColor} textAlign={textAlign}>
        <EditableMathField
          mathquillDidMount={initmathInput}
          latex={latex}
          onChange={onChangeHandler}
        />
      </S.OutputFormulaBox>
    </S.OutputFormulaWrapper>
  );
}

export default OutputFormula;
