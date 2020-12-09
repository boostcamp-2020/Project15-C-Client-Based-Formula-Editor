import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import OutputFormula from '@meal/OutputFormula';
import { Button, Icon } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import * as S from './style';
import { setToken } from '@utils/token';
import { userLogin, userLogout } from '@contexts/user';

function MenuBar() {
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const dispatch = useDispatch();
  const onClickLoginHandler = async () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      const { userToken, userId } = response.results;
      setToken(userToken);
      dispatch(userLogin(userId));
    });
  };

  const onClickLogoutHandler = async () => {
    chrome.storage.sync.clear();
    dispatch(userLogout());
  };
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src="/image/logo.png" />
      </S.Logo>
      <S.TextAreaItemWrapper>
        <TextAreaItem width={'100%'} />
      </S.TextAreaItemWrapper>
      <S.OutputWrapper>
        <OutputFormula backgroundColor={'white'} padding={'10px'} border={'none'} />
      </S.OutputWrapper>
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          <Button icon="file text" size="massive" />
          <Button icon="file image outline" size="massive" />
          <Button icon="qrcode" size="massive" />
          <Button icon="tv" size="massive" />
          {userId ? (
            <Button icon="user" size="massive" />
          ) : (
            <Button icon="user outline" size="massive" />
          )}
        </Button.Group>
      </S.ButtonWrapper>
    </S.MenuBarContainer>
  );
}

export default MenuBar;
