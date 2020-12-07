import { getToken, setToken } from '@utils/token';
import { useEffect, useRef, useState } from 'react';
import { LatexContent } from '../../../lib/constants/latex-header';

const useFormulaList = () => {
  const formulaRef = useRef<null | HTMLUListElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const timer = useRef<any>(null);
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

  const reserveHiddenFormula = () => {
    timer.current = setTimeout(() => {
      hiddenFormula();
    }, 600);
  };

  const clearHiddenTimemout = () => {
    clearTimeout(timer.current);
  };

  const onClickLoginHandler = async () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      const { userToken, result } = response.results;

      setToken(userToken);
      const resultToken = getToken();
    });
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
    nowHeader,
    setNowHeader,
    displayFormula,
    clearHiddenTimemout,
    hiddenFormula,
    reserveHiddenFormula,
    onClickLoginHandler
  };
};

export default useFormulaList;
