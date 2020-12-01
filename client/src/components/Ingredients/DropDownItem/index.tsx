import React, { ReactChildren } from 'react';
import { LatexHeader, LatexContent } from '../../../lib/constants/latex-header';
import * as S from './style';
interface DropDownItemProps {
  children?: ReactChildren | string;
  onMouseOver: (e: React.MouseEvent) => void;
  setNowHeader: (header: string) => void;
  setNowFormula: (formula: LatexContent[]) => void;
  latex: LatexHeader;
}

function DropDownItem({
  children,
  onMouseOver,
  latex,
  setNowHeader,
  setNowFormula,
}: DropDownItemProps) {
  const customMouseOver = (e: React.MouseEvent) => {
    onMouseOver(e);
    setNowFormula(latex.content);
    setNowHeader(latex.header);
  };

  if (children) {
    return <S.DropDownItemStyle onMouseOver={customMouseOver}>{children}</S.DropDownItemStyle>;
  }
  return <S.DropDownItemStyle header={latex.header} onMouseOver={customMouseOver} />;
}

export default DropDownItem;
