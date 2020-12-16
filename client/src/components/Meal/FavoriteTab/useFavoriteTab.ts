import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesThunk } from '@contexts/user';
import { RootState } from '@contexts/index';

function useFavoriteTab() {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;

  useEffect(() => {
    if (userId) {
      dispatch(getFavoritesThunk(userId));
    }
  }, [dispatch]);

  return {
    userInfo,
    loading,
    error,
    userId,
  };
}

export default useFavoriteTab;
