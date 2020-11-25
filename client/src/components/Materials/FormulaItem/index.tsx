import React from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';
import * as S from './style';

interface FormulaItemProps {
  latexInfo: LatexContent;
}

function FormulaItem({ latexInfo }: FormulaItemProps) {
  const onClick = () => {
    console.log(latexInfo.latex);
  };

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
