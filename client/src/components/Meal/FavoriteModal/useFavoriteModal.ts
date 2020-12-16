import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFavorites } from '@contexts/user';
import { FavoriteItem } from '@contexts/user/types';
import favoriteAPI from '@lib/apis/favorite';
import useCurrentTab from '@hooks/useCurrentTab';
import { RootState } from '@contexts/index';
import useInput from '@hooks/useInput';

const useFavoriteModal = (onToggle: () => void) => {
  const dispatch = useDispatch();
  const { currentTabInfo } = useCurrentTab();
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const [title, onChangeTitle, clearTitle] = useInput('');

  const onClickModalClosed = useCallback(() => {
    onToggle();
  }, []);

  const onClickRegister = async (props: FavoriteItem, clearTitle: () => void) => {
    const newFavoriteItem = await favoriteAPI.createFavorite(props);
    const { id, title, latex } = newFavoriteItem.favorite;
    dispatch(createFavorites({ id, title, latex }));
    clearTitle();
    onToggle();
  };

  return {
    title,
    onChangeTitle,
    currentTabInfo,
    onClickModalClosed,
    onClickRegister: () =>
      onClickRegister({ userId, title, latex: currentTabInfo.latex }, clearTitle),
  };
};

export default useFavoriteModal;
