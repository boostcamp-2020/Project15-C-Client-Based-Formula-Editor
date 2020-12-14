import React from 'react';
import { Tab, TextArea } from 'semantic-ui-react';
import useCalculatorTab from './useCalculatorTab';
import { calculatorButtons, flag } from '@constants/calculator';
import { Button, Ref } from 'semantic-ui-react';
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
        <Button key={index} id={button.name}>
          {button.symbol}
        </Button>
      ))}
    </S.ButtonRow>
  );

  return (
    <Tab.Pane>
      <S.CalculatorContainer>
        <S.CalculatorInputWrapper onClick={(e) => onClickHandler(e)}>
          <S.ButtonRow>
            <Ref innerRef={radRef}>
              <Button id={calculatorButtons[0].name} className="active-angle">
                {calculatorButtons[0].symbol}
              </Button>
            </Ref>
            <Ref innerRef={degRef}>
              <Button id={calculatorButtons[1].name}>{calculatorButtons[1].symbol}</Button>
            </Ref>
            {calculatorButtons.slice(2, 8).map((button, index) => (
              <Button key={index} id={button.name}>
                {button.symbol}
              </Button>
            ))}
          </S.ButtonRow>
          {createButtonItems(1)}
          {createButtonItems(2)}
          {createButtonItems(3)}
          {createButtonItems(4)}
        </S.CalculatorInputWrapper>
        <S.CalculatorOutputWrapper>
          <S.OutputOperation
            readOnly
            value={flag ? outputOperation + '=' + outputResult : outputOperation}
          />
          <Button
            content={outputResult}
            onClick={onClickOutputHandler}
            icon="right arrow"
            labelPosition="right"
          />
        </S.CalculatorOutputWrapper>
      </S.CalculatorContainer>
    </Tab.Pane>
  );
}

export default CalculatorTab;
