import React from 'react';
import { Tab } from 'semantic-ui-react';
import useCalculatorTab from './useCalculatorTab';
import { calculatorButtons } from '@constants/calculator';
import * as S from './style';

function CalculatorTab() {
  const {
    radRef,
    degRef,
    outputOperation,
    outputResult,
    onClickHandler,
    onClickOutputHandler,
  } = useCalculatorTab();

  const createButtonItems = (row: number, col = 8) => (
    <S.ButtonRow>
      {calculatorButtons.slice(row * col, (row + 1) * col).map((button, index) => (
        <S.ButtonItem key={index} id={button.name}>
          {button.symbol}
        </S.ButtonItem>
      ))}
    </S.ButtonRow>
  );

  return (
    <Tab.Pane>
      <S.CalculatorContainer>
        <S.CalculatorInputWrapper onClick={(e) => onClickHandler(e)}>
          <S.ButtonRow>
            <S.ButtonItem ref={radRef} id={calculatorButtons[0].name} className="active-angle">
              {calculatorButtons[0].symbol}
            </S.ButtonItem>
            <S.ButtonItem ref={degRef} id={calculatorButtons[1].name}>
              {calculatorButtons[1].symbol}
            </S.ButtonItem>
            {calculatorButtons.slice(2, 8).map((button, index) => (
              <S.ButtonItem key={index} id={button.name}>
                {button.symbol}
              </S.ButtonItem>
            ))}
          </S.ButtonRow>
          {createButtonItems(1)}
          {createButtonItems(2)}
          {createButtonItems(3)}
          {createButtonItems(4)}
        </S.CalculatorInputWrapper>
        <S.CalculatorOutputWrapper>
          <S.OutputOperation>{outputOperation}</S.OutputOperation>
          <S.OutputResult value={outputResult} onClick={(e) => onClickOutputHandler(e)}>
            {outputResult}
          </S.OutputResult>
        </S.CalculatorOutputWrapper>
      </S.CalculatorContainer>
    </Tab.Pane>
  );
}

export default CalculatorTab;
