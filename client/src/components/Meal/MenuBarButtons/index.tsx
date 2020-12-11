import React from 'react';
import IconMessage from '@ingredients/IconMessage';
import { Button } from 'semantic-ui-react';
import * as S from './style';

interface MenuBarSaveButtonsProps {
  title: string;
  iconName: string;
  size: string;
  onClickHandler: () => void;
}
function MenuBarButtons({ MenuBarSaveButtons }: any) {
  return (
    <S.ButtonWrapper>
      <Button.Group basic size={'massive'}>
        {MenuBarSaveButtons.map((Button: any, index: number) => {
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
  );
}

export default MenuBarButtons;
