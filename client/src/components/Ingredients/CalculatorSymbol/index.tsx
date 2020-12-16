import React from 'react';
import { Button } from 'semantic-ui-react';

interface CalculatorSymbolProps {
  name: string;
  symbol: string | number;
}

function CalulatorSymbol({ name, symbol }: CalculatorSymbolProps) {
  return <Button id={name}>{symbol}</Button>;
}

export default React.memo(CalulatorSymbol);
