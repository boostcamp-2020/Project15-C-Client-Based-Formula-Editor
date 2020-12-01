import { RootState } from '@contexts/index';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function useCurrentTab() {
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const currentTabInfo = useMemo(() => totalLatex.filter((latex) => latex.id === currentTab)[0], [
    currentTab,
    totalLatex,
  ]);

  return { currentTabInfo, currentTab, totalLatex };
}

export default useCurrentTab;
