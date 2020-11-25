import React, { ReactChildren } from 'react';
import { LatexHeader, LatexContent } from '../../../lib/constants/latex-header';
import * as S from './style';
interface ButtonProps {
  children?: ReactChildren | string;
  onMouseOver: (e: React.MouseEvent) => void;
  setNowFormula: (formula: LatexContent[]) => void;
  latex: LatexHeader;
}

function Button({ children, onMouseOver, latex, setNowFormula }: ButtonProps) {
  const customMouseOver = (e: React.MouseEvent) => {
    onMouseOver(e);
    setNowFormula(latex.content);
  };
  return (
    <S.ButtonStyle header={latex.header} onMouseOver={customMouseOver}>
      {children}
    </S.ButtonStyle>
  );
}

export default Button;
