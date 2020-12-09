import React from 'react';
import useSaveButtons from './useSaveButtons';
import QrCode from '@ingredients/QrCode';
import { Button, Message } from 'semantic-ui-react';
import * as S from './style';

function SaveButtons() {
  const {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    imageUrl,
    Modal,
    createHandler,
  } = useSaveButtons();

  return (
    <S.SaveButtonsContainer>
      <Button.Group basic vertical>
        <Button content="이미지 저장" onClick={downloadImage} />
        <Button content="텍스트 저장" onClick={downloadText} />
        <Button content="QR코드 생성" onClick={createHandler} />
        <Button content="화면 적용" onClick={clipboardHandler} />
      </Button.Group>
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
    </S.SaveButtonsContainer>
  );
}

export default SaveButtons;
