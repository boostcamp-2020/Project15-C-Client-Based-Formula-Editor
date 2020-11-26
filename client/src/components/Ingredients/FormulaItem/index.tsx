import React from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts/index';
import * as S from './style';
interface FormulaItemProps {
  latexInfo: LatexContent;
}

function FormulaItem({ latexInfo }: FormulaItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    if (mathfield) {
      mathfield.write(latexInfo.latex);
    }
  };

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
