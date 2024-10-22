import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { getImageURL } from '@utils/util';
import { ResizeHeaderProps } from '@set/ResizeHeader';
import QrCode from '@ingredients/QrCode';
import MenuBarInput from '@meal/MenuBarInput';
import MenuBarOutput from '@meal/MenuBarOutput';
import MenuBarButtons from '@meal/MenuBarButtons';
import useSaveButtons from '@set/SaveButtons/useSaveButtons';
import { CLIPBOARD_MESSAGE } from '@constants/constants';
import * as S from './style';

function MenuBar({ onToggle }: ResizeHeaderProps) {
  const {
    message,
    Modal,
    imageUrl,
    downloadImage,
    downloadText,
    clipboardHandler,
  } = useSaveButtons();
  const MenuBarSaveButtons = [
    { title: '이미지 저장', iconName: 'image', size: 'massive', onClickHandler: downloadImage },
    { title: '텍스트 저장', iconName: 'file text', size: 'massive', onClickHandler: downloadText },
    { title: '클립보드 복사', iconName: 'tv', size: 'massive', onClickHandler: clipboardHandler },
  ];
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <MenuBarInput />
      <MenuBarOutput />
      <MenuBarButtons MenuBarSaveButtons={MenuBarSaveButtons} />
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          <Button icon="sort" size="massive" onClick={onToggle} />
        </Button.Group>
      </S.ButtonWrapper>

      {message && (
        <S.MessageContainer>
          <Message positive>
            <Message.Header>{CLIPBOARD_MESSAGE}</Message.Header>
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
