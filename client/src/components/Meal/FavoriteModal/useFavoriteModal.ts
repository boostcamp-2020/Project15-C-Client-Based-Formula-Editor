import { useDispatch } from 'react-redux';
import { closeModal } from '@contexts/modal';
import { createFavorites } from '@contexts/user';
import { FavoriteItem } from '@contexts/user/types';
import favoriteAPI from '@lib/apis/favorite';

const useFavoriteModal = () => {
  const dispatch = useDispatch();

  const onClickModalClosed = () => {
    dispatch(closeModal());
  };

  const onClickRegister = async (props: FavoriteItem, clearTitle: () => void) => {
    const newFavoriteItem = await favoriteAPI.createFavorite(props);
    const { id, title, latex } = newFavoriteItem.favorite;
    dispatch(createFavorites({ id, title, latex }));
    clearTitle();
    dispatch(closeModal());
  };

  return {
    onClickModalClosed,
    onClickRegister,
  };
};

export default useFavoriteModal;
