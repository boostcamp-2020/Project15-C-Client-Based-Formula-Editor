import React from 'react';
import useSaveButtons from './useSaveButtons';
import { Button, Message } from 'semantic-ui-react';
import QrCode from '@ingredients/QrCode';
import * as S from './style';
import { getImageURL } from '@utils/util';
import { LoginMessage } from '@constants/constants';
import MessageItem from '@ingredients/MessageItem';

function SaveButtons() {
  const {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    loginMessage,
    imageUrl,
    Modal,
    createHandler,
    onClickLoginHandler,
    onClickLogoutHandler,
    userId,
  } = useSaveButtons();

  return (
    <S.SaveButtonsContainer>
      {userId ? (
        <S.Img src={getImageURL('logout.png')} onClick={onClickLogoutHandler} />
      ) : (
        <S.Img src={getImageURL('login.png')} onClick={onClickLoginHandler} />
      )}

      <Button.Group basic vertical>
        <Button content="이미지 저장" onClick={downloadImage} />
        <Button content="텍스트 저장" onClick={downloadText} />
        <Button content="QR코드 생성" onClick={createHandler} />
        <Button content="클립보드 복사" onClick={clipboardHandler} />
      </Button.Group>

      {message && (
        <MessageItem positive={true} title={'클립보드에 복사가 완료되었습니다.'}>
          <p>
            원하는 위치(커서)에 <b>Ctrl + V</b> 해보세요!
          </p>
        </MessageItem>
      )}

      {loginMessage &&
        (loginMessage === LoginMessage.LOGIN_SUCCESS ? (
          <MessageItem positive={true} title={loginMessage}>
            <p>이제 수식셰프의 즐겨찾기 기능을 사용할 수 있어요!</p>
          </MessageItem>
        ) : (
          <MessageItem positive={false} title={loginMessage} />
        ))}

      <Modal>
        <QrCode imageUrl={imageUrl} />
      </Modal>
    </S.SaveButtonsContainer>
  );
}

export default SaveButtons;
