import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { LatexContent } from '@constants/latex-header';

export interface FormulaItemProps {
  latexInfo: LatexContent;
  hiddenFormula: () => void;
}

const useFormulaItem = ({ latexInfo, hiddenFormula }: FormulaItemProps) => {
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const [matrixInfo, matrixState] = useState({ r: '', c: '' });
  const onClick = () => {
    if (mathfield) {
      mathfield.write(latexInfo.latex);
      hiddenFormula();
    }
  };

  const onInsertClick = () => {
    const latex: string = getMatrixRatex(matrixInfo);
    if (mathfield) {
      mathfield.write(latex);
      hiddenFormula();
    }
    matrixState({ r: '', c: '' });
  };

  const inputHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const changeHandler = (event: any) => {
    event.target.setAttribute('autocomplete', 'off');
    if (event.target.name === '행') {
      matrixState({ ...matrixInfo, r: event.target.value });
    } else {
      matrixState({ ...matrixInfo, c: event.target.value });
    }
  };

  const getMatrixRatex = ({ r, c }: { r: string; c: string }) => {
    if (c === '1') {
      return getMatrixRowPrice(r);
    }
    if (r === '1') {
      return getMatrixColumnPrice(c);
    }
    let tempR = '';
    for (let i = 1; i < parseInt(r); i++) {
      let tempC = '';
      for (let j = 1; j < parseInt(c); j++) {
        tempC += '&';
      }
      tempR += `\\${tempC}\\`;
    }
    return `\\begin{matrix}&\\${tempR}end{matrix}`;
  };

  const getMatrixRowPrice = (r: string) => {
    let tempC = '';
    for (let i = 1; i < parseInt(r); i++) {
      tempC += '\\\\';
    }
    return `\\begin{matrix}\\${tempC}end{matrix}`;
  };

  const getMatrixColumnPrice = (c: string) => {
    let tempR = '';
    for (let i = 1; i < parseInt(c); i++) {
      tempR += '&';
    }
    return `\\begin{matrix}${tempR}\\end{matrix}`;
  };

  return { onClick, onInsertClick, inputHandler, matrixInfo, changeHandler };
};

export default useFormulaItem;
