import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts';
import { LatexContent } from '../../../lib/constants/latex-header';

export interface FormulaItemProps {
  latexInfo: LatexContent;
  hiddenFormula: () => void;
}

const useFormulaItem = ({ latexInfo, hiddenFormula }: FormulaItemProps) => {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    if (mathfield) {
      mathfield.write(latexInfo.latex);
      hiddenFormula();
    }
  };

  return { onClick };
};

export default useFormulaItem;
