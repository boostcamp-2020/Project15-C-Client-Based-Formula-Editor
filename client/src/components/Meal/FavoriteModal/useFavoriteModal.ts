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

  const onClickRegister = async (props: FavoriteItem) => {
    const newFavoriteItem = await favoriteAPI.createFavorite(props);
    dispatch(createFavorites({ id: 5, title: 'hello', latex: '//sqrt' }));
  };

  return {
    onClickModalClosed,
    onClickRegister,
  };
};

export default useFavoriteModal;
