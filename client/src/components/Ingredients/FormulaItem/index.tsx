import React from 'react';
import { LatexContent } from '@constants/latex-header';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import * as S from './style';
interface FormulaItemProps {
  latexInfo: LatexContent;
  formulaRef: React.MutableRefObject<HTMLHeadingElement | null>;
}

function FormulaItem({ latexInfo, formulaRef }: FormulaItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    if (mathfield && formulaRef.current) {
      mathfield.write(latexInfo.latex);
      formulaRef.current.style.display = 'none';
    }
  };

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
