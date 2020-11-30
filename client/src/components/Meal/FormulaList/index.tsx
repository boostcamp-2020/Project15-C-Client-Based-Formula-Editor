import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<null | HTMLDivElement>(null);
  const timer = useRef<any>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);

  const displayFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'flex';
      timer.current = setTimeout(() => {
        formulaRef.current!.style.display = 'none';
      }, 500);
    }
  };

  const clearHiddenTimemout = () => {
    clearTimeout(timer.current);
  };

  const hiddenFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', () => {
      if (formulaRef.current) {
        formulaRef.current.style.display = 'none';
      }
    });
  }, []);

  return (
    <>
      <S.FormulaContainer ref={containerRef} className="formula_container">
        <S.FormulaHeaderWrapper>
          {FORMULA_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={displayFormula}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.FormulaHeaderWrapper>
        <S.SymbolHeaderWrapper>
          {SYMBOL_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              onMouseOver={displayFormula}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.SymbolHeaderWrapper>
      </S.FormulaContainer>
      <S.Contents ref={formulaRef} onMouseLeave={hiddenFormula} onMouseOver={clearHiddenTimemout}>
        {nowFormulas.map((latexInfo, index) => (
          <FormulaItem
            key={index}
            latexInfo={latexInfo}
            hiddenFormula={hiddenFormula}
          ></FormulaItem>
        ))}
      </S.Contents>
    </>
  );
}

export default FormulaList;
