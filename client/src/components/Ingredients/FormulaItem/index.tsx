import React from 'react';
import useFormulaItem, { FormulaItemProps } from './useFormulaItem';
import * as S from './style';

function FormulaItem({ latexInfo, hiddenFormula }: FormulaItemProps) {
  const { onClick } = useFormulaItem({ latexInfo, hiddenFormula });

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
