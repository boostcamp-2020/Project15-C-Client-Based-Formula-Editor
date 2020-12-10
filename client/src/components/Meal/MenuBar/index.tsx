import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { ResizeHeaderProps } from '@set/ResizeHeader';
import { getImageURL } from '@utils/util';
import QrCode from '@ingredients/QrCode';
import useMenuBar from './useMenuBar';
import MenuBarInput from '@meal/MenuBarInput';
import MenuBarOutput from '@meal/MenuBarOutput';
import MenuBarButtons from '@meal/MenuBarButtons';
import * as S from './style';

function MenuBar({ onToggle }: ResizeHeaderProps) {
  const { message, Modal, imageUrl } = useMenuBar();

  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <MenuBarInput />
      <MenuBarOutput />
      <MenuBarButtons />
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          <Button icon="sort" size="massive" onClick={onToggle} />
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
