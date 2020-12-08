import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@contexts/index';
import TableItem from '@ingredients/TableItem';
import { Tab } from 'semantic-ui-react';
import * as S from './style';
import AlertItem from '@ingredients/AlertItem';
import { NEED_LOGIN_ICON, NO_LIST_ICON, AlertMessage } from '@constants/constants';
import { getFavoritesThunk } from '@contexts/user';

function FavoriteTab() {
  const { data, loading, error } = useSelector((state: RootState) => state.user.UserFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk(1));
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  if (!data?.favoriteLists) return null;
  const newData = data.favoriteLists;
  // <AlertItem icon={NO_LIST_ICON} message={AlertMessage.NO_LIST_MESSAGE} />

  return (
    <Tab.Pane>
      <S.FavoriteContainer>
        <TableItem headerTitle={'Title'} headerLatex={'Latex'} data={newData} />
      </S.FavoriteContainer>
    </Tab.Pane>
  );
}

export default FavoriteTab;
