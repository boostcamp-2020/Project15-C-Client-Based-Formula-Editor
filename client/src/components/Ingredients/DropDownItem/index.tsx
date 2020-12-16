import React, { ReactChildren, useRef } from 'react';
import { LatexHeader, LatexContent } from '@constants/latex-header';
import * as S from './style';

interface DropDownItemProps {
  children?: ReactChildren | string;
  formulaList: React.MutableRefObject<HTMLUListElement | null>;
  onDisplayFormula: () => void;
  onHiddenFormula: () => void;
  nowHeader: string;
  setNowHeader: (header: string) => void;
  setNowFormula: (formula: LatexContent[]) => void;
  latex: LatexHeader;
}

function DropDownItem({
  children,
  latex,
  formulaList,
  nowHeader,
  onDisplayFormula,
  onHiddenFormula,
  setNowHeader,
  setNowFormula,
}: DropDownItemProps) {
  const itemRef = useRef<null | HTMLButtonElement>(null);

  const onClickDropDownItem = () => {
    if (!formulaList.current) return;

    if (nowHeader !== latex.header) {
      onDisplayFormula();
    } else {
      if (formulaList.current.style.display === 'none') {
        onDisplayFormula();
      } else {
        onHiddenFormula();
        if (itemRef.current) itemRef.current.blur();
      }
    }
    setNowFormula(latex.content);
    setNowHeader(latex.header);
  };

  return children ? (
    <S.DropDownItemStyle ref={itemRef} onClick={onClickDropDownItem}>
      {children}
    </S.DropDownItemStyle>
  ) : (
    <S.DropDownItemStyle ref={itemRef} onClick={onClickDropDownItem} header={latex.header} />
  );
}

export default DropDownItem;
