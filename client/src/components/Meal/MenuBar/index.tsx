import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import OutputFormula from '@meal/OutputFormula';
import { Button, Message } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import useSaveButtons from '@set/SaveButtons/useSaveButtons';
import QrCode from '@ingredients/QrCode';

import * as S from './style';

function MenuBar() {
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const {
    message,
    Modal,
    imageUrl,
    downloadImage,
    downloadText,
    createHandler,
    clipboardHandler,
    onClickLogoutHandler,
    onClickLoginHandler,
  } = useSaveButtons();
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src="/image/logo.png" />
      </S.Logo>
      <S.TextAreaItemWrapper>
        <TextAreaItem />
      </S.TextAreaItemWrapper>
      <S.OutputWrapper>
        <OutputFormula backgroundColor={'white'} padding={'10px'} border={'none'} />
      </S.OutputWrapper>
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          <Button icon="file image outline" size="massive" onClick={downloadImage} />
          <Button icon="file text" size="massive" onClick={downloadText} />
          <Button icon="qrcode" size="massive" onClick={createHandler} />
          <Button icon="tv" size="massive" onClick={clipboardHandler} />
          {userId ? (
            <Button icon="user" size="massive" onClick={onClickLogoutHandler} />
          ) : (
            <Button icon="user outline" size="massive" onClick={onClickLoginHandler} />
          )}
        </Button.Group>
      </S.ButtonWrapper>
      {message && (
        <S.MessageContainer>
          <Message positive>
            <Message.Header>클립보드에 복사가 완료되었습니다.</Message.Header>
            <p>
              원하는 위치(커서)에 <b>Ctrl + V</b> 해보세요!
            </p>
          </Message>
        </S.MessageContainer>
      )}
      <Modal>
        <QrCode imageUrl={imageUrl} />
      </Modal>
    </S.MenuBarContainer>
  );
}

export default MenuBar;
