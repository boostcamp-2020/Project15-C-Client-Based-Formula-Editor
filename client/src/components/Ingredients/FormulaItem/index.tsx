import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import useFormulaItem, { FormulaItemProps } from './useFormulaItem';
import * as S from './style';

function FormulaItem({ latexInfo, hiddenFormula }: FormulaItemProps) {
  const { onClick, onInsertClick, inputHandler, matrixInfo, changeHandler } = useFormulaItem({
    latexInfo,
    hiddenFormula,
  });
  const isSvg = latexInfo.image.includes('svg');
  if (isSvg) {
    return (
      <>
        {latexInfo.latex === 'matrixInsert' ? (
          <S.InsertWrapper onClick={onInsertClick}>
            <S.InsertCotnets>
              <Input
                onClick={inputHandler}
                label={{ basic: true, content: '행' }}
                labelPosition="left"
                size="mini"
                value={matrixInfo.r}
                onChange={(event) => changeHandler(event)}
                name={'행'}
              />
              <Input
                onClick={inputHandler}
                label={{ basic: true, content: '열' }}
                labelPosition="left"
                size="mini"
                value={matrixInfo.c}
                onChange={(event) => changeHandler(event)}
                name={'열'}
              />
            </S.InsertCotnets>
            <S.InsertCotnets>
              <Icon name="checkmark" color="grey" size="big" />
            </S.InsertCotnets>
          </S.InsertWrapper>
        ) : (
          <S.FormulaItem onClick={onClick} isSvg={isSvg} image={latexInfo.image}></S.FormulaItem>
        )}
      </>
    );
  }
  return (
    <S.FormulaItem onClick={onClick} isSvg={isSvg}>
      {latexInfo.image}
    </S.FormulaItem>
  );
}

export default FormulaItem;
