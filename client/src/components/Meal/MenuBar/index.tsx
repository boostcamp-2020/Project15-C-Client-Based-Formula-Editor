import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import OutputFormulaBox from '@meal/OutputFormulaBox';
import { Button, Message } from 'semantic-ui-react';
import { ResizeHeaderProps } from '@set/ResizeHeader';
import useSaveButtons from '@set/SaveButtons/useSaveButtons';
import QrCode from '@ingredients/QrCode';
import { getImageURL } from '@utils/util';

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
    { title: '이미지 저장', iconName: 'image', size: 'massive', onClickHandler: downloadImage },
    { title: '텍스트 저장', iconName: 'file text', size: 'massive', onClickHandler: downloadText },
    { title: 'QR코드 생성', iconName: 'qrcode', size: 'massive', onClickHandler: createHandler },
    { title: '화면 적용', iconName: 'tv', size: 'massive', onClickHandler: clipboardHandler },
  ];
  return (
    <S.MenuBarContainer>
      <S.Logo>
        <S.LogoImg src={getImageURL('logo.png')} />
      </S.Logo>
      <S.TextAreaItemWrapper>
        <S.LabelWrapper>
          <S.LabelIcon>➕</S.LabelIcon>
          <S.LabelText className="globalFont">입력</S.LabelText>
        </S.LabelWrapper>
        <TextAreaItem size={'mini'} />
      </S.TextAreaItemWrapper>
      <S.OutputWrapper>
        <S.LabelWrapper>
          <S.LabelIcon>✖️</S.LabelIcon>
          <S.LabelText className="globalFont">출력</S.LabelText>
        </S.LabelWrapper>
        <OutputFormulaBox
          isMenuBar={true}
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
