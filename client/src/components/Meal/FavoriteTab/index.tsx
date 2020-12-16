import React from 'react';
import TableItem from '@ingredients/TableItem';
import AlertItem from '@ingredients/AlertItem';
import { NEED_LOGIN_ICON, NO_LIST_ICON, AlertMessage } from '@constants/constants';
import Loading from '@ingredients/Loading';
import useFavoriteTab from './useFavoriteTab';
import { Tab } from 'semantic-ui-react';
import * as S from './style';

function FavoriteTab() {
  const { userId, userInfo, error, loading } = useFavoriteTab();

  if (loading)
    return (
      <Tab.Pane>
        <Loading size={'mini'} />
      </Tab.Pane>
    );
  if (error || !userInfo?.favoriteLists)
    return <AlertItem icon={NO_LIST_ICON} message={AlertMessage.NO_LIST_MESSAGE} />;
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
