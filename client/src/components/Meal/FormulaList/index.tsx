import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropDownItem from '@ingredients/DropDownItem';
import { FORMULA_HEADER, SYMBOL_HEADER } from '@lib/constants/latex-header';
import FormulaItem from '@ingredients/FormulaItem';
import useFormulaList from './useFormulaList';
import * as S from './style';
import { RootState } from '@contexts/index';
import { userLogin, userLogout } from '@contexts/user';
import { setToken } from '@utils/token';

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

  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const dispatch = useDispatch();

  const onClickLoginHandler = async () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      const { userToken, userId } = response.results;
      setToken(userToken);
      dispatch(userLogin(userId));
    });
  };

  const onClickLogoutHandler = async () => {
    chrome.storage.sync.clear();
    dispatch(userLogout());
  };

  return (
    <>
      <S.FormulaContainer>
        <S.Logo />

        <S.HeaderWraaper>
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
        </S.HeaderWraaper>

        {userId ? (
          <S.LogoutButton onClick={onClickLogoutHandler} />
        ) : (
          <S.LoginButton onClick={onClickLoginHandler} />
        )}
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
