import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import OutputFormula from '@meal/OutputFormula';
import { Button } from 'semantic-ui-react';

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
      <TextAreaItem width={'30%'} />
      <S.OutputWrapper>
        <OutputFormula />
      </S.OutputWrapper>
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          <Button icon="file text outline" size="massive" />
          <Button icon="file image outline" size="massive" />
          <Button icon="qrcode" size="massive" />
          <Button icon="tv" size="massive" />
        </Button.Group>
      </S.ButtonWrapper>
      {userId ? (
        <S.Img src="image/logout.png" onClick={onClickLogoutHandler} />
      ) : (
        <S.Img src="image/login.png" onClick={onClickLoginHandler} />
      )}
    </S.MenuBarContainer>
  );
}

export default MenuBar;
