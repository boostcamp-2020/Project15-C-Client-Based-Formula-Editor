import { useCallback, useEffect, useRef, useState } from 'react';
import { observer } from '@utils/util';
import { LatexContent } from '@constants/latex-header';

const useFormulaList = () => {
  const formulaRef = useRef<null | HTMLUListElement>(null);
  const formulaHeaderRef = useRef<null | HTMLDivElement>(null);
  const symbolHeaderRef = useRef<null | HTMLDivElement>(null);
  const [nowHeader, setNowHeader] = useState('');
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

  const hiddenFormulaOnPage = useCallback((target: HTMLElement) => {
    if (
      target.closest('div') !== formulaHeaderRef.current &&
      target.closest('div') !== symbolHeaderRef.current
    ) {
      hiddenFormula();
    }
  }, []);

  useEffect(() => {
    observer.subscribe(hiddenFormulaOnPage);
  }, []);

  return {
    formulaRef,
    formulaHeaderRef,
    symbolHeaderRef,
    nowFormulas,
    setNowFormula,
    nowHeader,
    setNowHeader,
    displayFormula,
    hiddenFormula,
  };
};

export default useFormulaList;
