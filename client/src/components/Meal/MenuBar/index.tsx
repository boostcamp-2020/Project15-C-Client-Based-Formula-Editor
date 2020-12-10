import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import OutputFormulaBox from '@meal/OutputFormulaBox';
import { Button, Message } from 'semantic-ui-react';
import { ResizeHeaderProps } from '@set/ResizeHeader';
import useSaveButtons from '@set/SaveButtons/useSaveButtons';
import QrCode from '@ingredients/QrCode';

import * as S from './style';
import IconMessage from '@ingredients/IconMessage';

function MenuBar({ onToggle }: ResizeHeaderProps) {
  const {
    message,
    Modal,
    imageUrl,
    downloadImage,
    downloadText,
    createHandler,
    clipboardHandler,
  } = useSaveButtons();
  const MenuBarSaveButtons = [
    { title: '이미지 저장', iconName: 'image', size: 'massize', onClickHandler: downloadImage },
    { title: '텍스트 저장', iconName: 'file text', size: 'massize', onClickHandler: downloadText },
    { title: 'QR코드 생성', iconName: 'qrcode', size: 'massize', onClickHandler: createHandler },
    { title: '화면 적용', iconName: 'tv', size: 'massize', onClickHandler: clipboardHandler },
  ];
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src="/image/logo.png" />
      </S.Logo>
      <S.TextAreaItemWrapper>
        <S.LabelWrapper>
          <S.LabelIcon>➕</S.LabelIcon>
          <S.LabelText>입력</S.LabelText>
        </S.LabelWrapper>
        <TextAreaItem width={'100%'} />
      </S.TextAreaItemWrapper>
      <S.OutputWrapper>
        <S.LabelWrapper>
          <S.LabelIcon>✖️</S.LabelIcon>
          <S.LabelText>출력</S.LabelText>
        </S.LabelWrapper>
        <OutputFormulaBox
          width={'100%'}
          backgroundColor={'white'}
          padding={'10px'}
          border={'none'}
        />
      </S.OutputWrapper>
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
          <Button icon="window minimize" size="massive" onClick={onToggle} />
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
