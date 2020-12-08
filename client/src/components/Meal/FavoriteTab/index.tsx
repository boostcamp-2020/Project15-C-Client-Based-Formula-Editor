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
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk(1));
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!userInfo?.favoriteLists) return null;
  const { favoriteLists } = userInfo;

  return (
    <Tab.Pane>
      <S.FavoriteContainer>
        {!favoriteLists.length ? (
          <AlertItem icon={NO_LIST_ICON} message={AlertMessage.NO_LIST_MESSAGE} />
        ) : (
          <TableItem headerTitle={'Title'} headerLatex={'Latex'} data={favoriteLists} />
        )}
      </S.FavoriteContainer>
    </Tab.Pane>
  );
}

export default FavoriteTab;
