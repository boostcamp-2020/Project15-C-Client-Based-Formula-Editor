import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@contexts/index';
import TableItem from '@ingredients/TableItem';
import { Tab } from 'semantic-ui-react';
import AlertItem from '@ingredients/AlertItem';
import { NEED_LOGIN_ICON, NO_LIST_ICON, AlertMessage } from '@constants/constants';
import { getFavoritesThunk } from '@contexts/user';
import Loading from '@ingredients/Loading';
import * as S from './style';

function FavoriteTab() {
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;

  useEffect(() => {
    if (userId) {
      dispatch(getFavoritesThunk(userId));
    }
  }, [dispatch]);

  if (loading)
    return (
      <Tab.Pane>
        <Loading size={'mini'} />
      </Tab.Pane>
    );
  if (error || !userInfo?.favoriteLists) return <Tab.Pane>에러 발생!</Tab.Pane>;
  const { favoriteLists } = userInfo;

  return (
    <Tab.Pane>
      <S.FavoriteContainer>
        {!userId ? (
          <AlertItem icon={NEED_LOGIN_ICON} message={AlertMessage.NEED_LOGIN_MESSAGE} />
        ) : !favoriteLists.length ? (
          <AlertItem icon={NO_LIST_ICON} message={AlertMessage.NO_LIST_MESSAGE} />
        ) : (
          <TableItem headerTitle={'Title'} headerLatex={'Latex'} data={favoriteLists} />
        )}
      </S.FavoriteContainer>
    </Tab.Pane>
  );
}

export default FavoriteTab;
