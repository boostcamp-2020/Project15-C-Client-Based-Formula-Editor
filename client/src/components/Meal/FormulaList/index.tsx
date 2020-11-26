import React, { useRef, useState } from 'react';
import { Header, Popup, Grid } from 'semantic-ui-react';
// import * as ButtonImage from '../../../../public/image/math.svg';
import DropDownItem from '../../Ingredients/DropDownItem';
import {
  FORMULA_HEADER,
  SYMBOL_HEADER,
  LatexHeader,
  LatexContent,
} from '../../../lib/constants/latex-header';
import * as S from './style';
import FormulaItem from '../../Ingredients/FormulaItem';

function FormulaList() {
  const formulaRef = useRef<null | HTMLHeadingElement>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);
  const mouseHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'flex';
    }
  };
  const leaveHandler = (event: React.MouseEvent) => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };
  document.body.addEventListener('mouseleave', () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  });
  return (
    <>
      <S.FormulaContainer>
        <S.FormulaHeaderWrapper>
          {FORMULA_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.FormulaHeaderWrapper>
        <S.SymbolHeaderWrapper>
          {SYMBOL_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={mouseHandler}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.SymbolHeaderWrapper>
      </S.FormulaContainer>
      <S.Contents ref={formulaRef} onMouseLeave={leaveHandler}>
        {nowFormulas.map((latexInfo, index) => (
          <FormulaItem key={index} latexInfo={latexInfo}></FormulaItem>
        ))}
      </S.Contents>
    </>
  );
}

export default FormulaList;
