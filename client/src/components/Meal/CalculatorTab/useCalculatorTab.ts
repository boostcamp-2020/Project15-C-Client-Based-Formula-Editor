import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { useRef, useState } from 'react';
import { calculatorButtons, calculator } from '@constants/calculator';

const useCalculatorTab = () => {
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const [outputOperation, setOutputOperation] = useState('');
  const [outputResult, setOutputResult] = useState<number | string>(0);
  const radRef = useRef<null | HTMLButtonElement>(null);
  const degRef = useRef<null | HTMLButtonElement>(null);

  const onClickHandler = (e: React.MouseEvent) => {
    const targetButton = e.target as HTMLButtonElement;

    calculatorButtons.forEach((button) => {
      if (targetButton && button.name === targetButton.id)
        calculator(button, radRef, degRef, setOutputOperation, setOutputResult);
    });
  };

  const onClickOutputHandler = () => {
    if (mathfield) {
      mathfield.write(outputResult.toString());
    }
  };

  return {
    radRef,
    degRef,
    outputOperation,
    outputResult,
    onClickHandler,
    onClickOutputHandler,
  };
};

export default useCalculatorTab;
