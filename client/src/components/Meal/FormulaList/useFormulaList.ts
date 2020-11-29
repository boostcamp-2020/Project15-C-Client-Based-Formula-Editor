import { useEffect, useRef, useState } from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';

const useFormulaList = () => {
  const formulaRef = useRef<null | HTMLHeadingElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const timer = useRef<any>(null);
  const [nowFormulas, setNowFormula] = useState<LatexContent[]>([]);

  const displayFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'flex';
      timer.current = setTimeout(() => {
        formulaRef.current!.style.display = 'none';
      }, 500);
    }
  };

  const clearHiddenTimemout = () => {
    clearTimeout(timer.current);
  };

  const hiddenFormula = () => {
    if (formulaRef.current) {
      formulaRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    document.body.addEventListener('mouseleave', () => {
      if (formulaRef.current) {
        formulaRef.current.style.display = 'none';
      }
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
  };
};

export default useFormulaList;
