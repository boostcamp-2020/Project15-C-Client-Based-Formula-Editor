import React from 'react';
import DropDownItem from '../../Ingredients/DropDownItem';
import { FORMULA_HEADER, SYMBOL_HEADER } from '../../../lib/constants/latex-header';
import FormulaItem from '../../Ingredients/FormulaItem';
import useFormulaList from './useFormulaList';
import * as S from './style';

function FormulaList() {
  const {
    formulaRef,
    containerRef,
    displayFormula,
    clearHiddenTimemout,
    hiddenFormula,
    reserveHiddenFormula,
    nowFormulas,
    setNowFormula,
  } = useFormulaList();

  return (
    <>
      <S.FormulaContainer
        ref={containerRef}
        className="formula_container"
        onMouseLeave={reserveHiddenFormula}
      >
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
            >
              {latex.header}
            </DropDownItem>
          ))}
        </S.SymbolHeaderWrapper>
      </S.FormulaContainer>

      <S.FormulaList
        ref={formulaRef}
        onMouseLeave={hiddenFormula}
        onMouseOver={clearHiddenTimemout}
        length={nowFormulas.length}
      >
        {nowFormulas.map((latexInfo, index) => (
          <FormulaItem
            key={index}
            latexInfo={latexInfo}
            hiddenFormula={hiddenFormula}
          ></FormulaItem>
        ))}
      </S.FormulaList>
    </>
  );
}

export default FormulaList;
