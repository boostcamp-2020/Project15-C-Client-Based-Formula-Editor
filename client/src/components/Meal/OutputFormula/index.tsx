import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { Button } from 'semantic-ui-react';
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
    onClickFavoriteHandler,
  } = useContent();

  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;

  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox fontSize={fontSize} fontColor={fontColor} textAlign={textAlign}>
        <S.StartButtonBox>
          <Button circular icon="star" size="mini" onClick={onClickFavoriteHandler} />
        </S.StartButtonBox>
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
