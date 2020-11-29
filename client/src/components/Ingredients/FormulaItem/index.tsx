import React from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts/index';
import * as S from './style';
interface FormulaItemProps {
  latexInfo: LatexContent;
  hiddenFormula: () => void;
}

function FormulaItem({ latexInfo, hiddenFormula }: FormulaItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    if (mathfield) {
      mathfield.write(latexInfo.latex);
      hiddenFormula();
    }
  };

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
