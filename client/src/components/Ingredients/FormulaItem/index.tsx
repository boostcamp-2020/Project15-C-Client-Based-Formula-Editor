import React from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../contexts/index';
import { editLatex } from '../../../contexts/latex';
import * as S from './style';
interface FormulaItemProps {
  latexInfo: LatexContent;
}

function FormulaItem({ latexInfo }: FormulaItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const dispatch = useDispatch();
  const onClick = () => {
    if (typeof mathfield !== 'string') {
      mathfield.write(latexInfo.latex);
    }
  };

  return <S.FormulaItem onClick={onClick} image={latexInfo.image}></S.FormulaItem>;
}

export default FormulaItem;
