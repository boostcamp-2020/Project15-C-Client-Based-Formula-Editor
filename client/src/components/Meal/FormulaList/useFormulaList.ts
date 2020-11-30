import { useEffect, useRef, useState } from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';

const useFormulaList = () => {
  const formulaRef = useRef<null | HTMLUListElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const timer = useRef<any>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);

  const displayFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'flex';
    }
  };

  const hiddenFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };

  const reserveHiddenFormula = () => {
    timer.current = setTimeout(() => {
      hiddenFormula();
    }, 400);
  };

  const clearHiddenTimemout = () => {
    clearTimeout(timer.current);
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', () => {
      clearHiddenTimemout();
      hiddenFormula();
    });
  }, []);

  return {
    formulaRef,
    containerRef,
    nowFormulas,
    setNowFormula,
    displayFormula,
    clearHiddenTimemout,
    hiddenFormula,
    reserveHiddenFormula,
  };
};

export default useFormulaList;
