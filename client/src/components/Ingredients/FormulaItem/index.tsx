import React from 'react';
import useFormulaItem, { FormulaItemProps } from './useFormulaItem';
import * as S from './style';

function FormulaItem({ latexInfo, hiddenFormula }: FormulaItemProps) {
  const { onClick } = useFormulaItem({ latexInfo, hiddenFormula });
  const isSvg = latexInfo.image.includes('svg');
  if (isSvg) {
    return (
      <>
        <S.FormulaItem onClick={onClick} isSvg={isSvg} image={latexInfo.image}></S.FormulaItem>{' '}
        {latexInfo.latex === 'matrixInsert' && <S.InsertWrapper>jlj</S.InsertWrapper>}
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
