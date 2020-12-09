import React, { useState } from 'react';
import useSaveButtons from './useSaveButtons';
import { Button, Message, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import * as S from './style';
import useModal from '@hooks/useModal';
import QRcode from 'qrcode.react';

function SaveButtons() {
  const {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    imageUrl,
    createQrcode,
    setImageUrl,
    saveHandler,
  } = useSaveButtons();
  const createHandler = () => {
    createQrcode();
    toggleModal();
  };
  const closeHandler = () => {
    setImageUrl('');
  };
  const [toggleModal, Modal] = useModal({ closeHandler, saveHandler });
  return (
    <S.SaveButtonsContainer>
      <Button.Group basic vertical>
        <Button content="이미지 저장" onClick={downloadImage} />
        <Button content="텍스트 저장" onClick={downloadText} />
        <Button content="QR코드" onClick={createHandler} />
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
        <>
          <QRcode value={imageUrl} />
          {!imageUrl && (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          )}
        </>
      </Modal>
    </S.SaveButtonsContainer>
  );
}

export default SaveButtons;
