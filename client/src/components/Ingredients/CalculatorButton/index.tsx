import React from 'react';
import { calculatorButtons } from '@constants/calculator';
import { Button } from 'semantic-ui-react';
import * as S from './style';

interface CalulatorButtonProps {
  row: number;
  col?: number;
}

function CalculatorButton({ row, col = 8 }: CalulatorButtonProps) {
  return (
    <S.ButtonRow>
      {calculatorButtons.slice(row * col, (row + 1) * col).map((button, index) => (
        <Button key={index} id={button.name}>
          {button.symbol}
        </Button>
      ))}
    </S.ButtonRow>
  );
}

export default React.memo(CalculatorButton);
