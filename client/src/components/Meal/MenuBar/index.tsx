import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { ResizeHeaderProps } from '@set/ResizeHeader';
import useMenuBar from './useMenuBar';
import QrCode from '@ingredients/QrCode';
import { getImageURL } from '@utils/util';
import IconMessage from '@ingredients/IconMessage';
import * as S from './style';
import MenuBarInput from '@meal/MenuBarInput';
import MenuBarOutput from '@meal/MenuBarOutput';

function MenuBar({ onToggle }: ResizeHeaderProps) {
  const { MenuBarSaveButtons, message, Modal, imageUrl } = useMenuBar();

  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <MenuBarInput />
      <MenuBarOutput />
      <S.ButtonWrapper>
        <Button.Group basic size="massive">
          {MenuBarSaveButtons.map((Button, index) => {
            return (
              <IconMessage
                title={Button.title}
                iconName={Button.iconName}
                size={Button.size}
                key={index}
                onClickHandler={Button.onClickHandler}
              />
            );
          })}
        </Button.Group>
      </S.ButtonWrapper>
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
