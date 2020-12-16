import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeTab, removeTab, TabInfo } from '../../../contexts/latex';

const usePageTabItem = ({ item }: { item: TabInfo }) => {
  const dispatch = useDispatch();

  const handleItemClick = useCallback(
    (id: number) => () => {
      dispatch(changeTab(id));
    },
    []
  );

  const removeTabHandler = useCallback((id: number) => {
    dispatch(removeTab(id));
  }, []);

  const onRemoveTab = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      removeTabHandler(item.id);
    },
    [item]
  );

  return {
    handleItemClick,
    onRemoveTab,
  };
};

export default usePageTabItem;
