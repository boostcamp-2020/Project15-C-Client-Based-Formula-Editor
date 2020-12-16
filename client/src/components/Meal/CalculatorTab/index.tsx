import React from 'react';
import useCalculatorTab from './useCalculatorTab';
import { calculatorButtons, flag } from '@constants/calculator';
import CalculatorButton from '@ingredients/CalculatorButton';
import CalculatorSymbol from '@ingredients/CalculatorSymbol';
import { Button, Ref, Tab } from 'semantic-ui-react';
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
              <CalculatorSymbol key={index} name={button.name} symbol={button.symbol} />
            ))}
          </S.ButtonRow>
          {Array.from({ length: 4 }).map((v, index) => (
            <CalculatorButton key={index} row={index + 1} />
          ))}
        </S.CalculatorInputWrapper>
        <S.CalculatorOutputWrapper>
          <S.OutputOperation
            readOnly
            value={flag ? outputOperation + '=' + outputResult : outputOperation}
          />
          <Button
            content={<div>값 적용</div>}
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
