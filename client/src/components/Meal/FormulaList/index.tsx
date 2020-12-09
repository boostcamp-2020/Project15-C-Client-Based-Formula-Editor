import React from 'react';
import DropDownItem from '@ingredients/DropDownItem';
import { FORMULA_HEADER, SYMBOL_HEADER } from '@lib/constants/latex-header';
import FormulaItem from '@ingredients/FormulaItem';
import useFormulaList from './useFormulaList';
import { getImageURL } from '@utils/util';
import * as S from './style';

function FormulaList() {
  const {
    formulaRef,
    formulaHeaderRef,
    symbolHeaderRef,
    displayFormula,
    hiddenFormula,
    nowHeader,
    setNowHeader,
    nowFormulas,
    setNowFormula,
  } = useFormulaList();

  return (
    <>
      <S.FormulaContainer>
        <S.Logo>
          <S.LogoImg src={getImageURL('logo.png')} />
        </S.Logo>

        <S.FormulaHeaderWrapper ref={formulaHeaderRef}>
          {FORMULA_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              formulaList={formulaRef}
              onHiddenFormula={hiddenFormula}
              onDisplayFormula={displayFormula}
              nowHeader={nowHeader}
              setNowHeader={setNowHeader}
              setNowFormula={setNowFormula}
            ></DropDownItem>
          ))}
        </S.FormulaHeaderWrapper>

        <S.SymbolHeaderWrapper ref={symbolHeaderRef}>
          {SYMBOL_HEADER.map((latex, index) => (
            <DropDownItem
              latex={latex}
              key={index}
              formulaList={formulaRef}
              onHiddenFormula={hiddenFormula}
              onDisplayFormula={displayFormula}
              nowHeader={nowHeader}
              setNowHeader={setNowHeader}
              setNowFormula={setNowFormula}
            >
              {latex.header}
            </DropDownItem>
          ))}
        </S.SymbolHeaderWrapper>
        <S.Logo />
      </S.FormulaContainer>

      <S.FormulaList ref={formulaRef} length={nowFormulas.length} header={nowHeader}>
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
