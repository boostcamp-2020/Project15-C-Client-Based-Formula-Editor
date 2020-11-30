import { useDispatch } from 'react-redux';
import { changeTab, removeTab, TabInfo } from '../../../contexts/latex';

const useMenuItem = ({ item }: { item: TabInfo }) => {
  const dispatch = useDispatch();

  const handleItemClick = (id: number) => {
    dispatch(changeTab(id));
  };

  const removeTabHandler = (id: number) => {
    dispatch(removeTab(id));
  };

  const onRemoveTab = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeTabHandler(item.id);
  };

  return {
    handleItemClick,
    removeTabHandler,
    onRemoveTab,
  };
};

export default useMenuItem;
