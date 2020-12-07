import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import useContent from './useOutputFormula';
import * as S from './style';

function OutputFormula() {
  const {
    initmathInput,
    currentTabInfo,
    onChangeHandler,
    onClickHandler,
    mathfieldRef,
    onKeyDownHandler,
  } = useContent();
  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;
  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox fontSize={fontSize} fontColor={fontColor} textAlign={textAlign}>
        <S.OutputFormulaContent ref={mathfieldRef}>
          <EditableMathField
            mathquillDidMount={initmathInput}
            latex={latex}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
        </S.OutputFormulaContent>
      </S.OutputFormulaBox>
    </S.OutputFormulaWrapper>
  );
}

export default OutputFormula;
