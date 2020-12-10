import React from 'react';
import { Button } from 'semantic-ui-react';
import useMenuBar from '@meal/MenuBar/useMenuBar';
import IconMessage from '@ingredients/IconMessage';
import * as S from './style';

function MenuBarButtons() {
  const { MenuBarSaveButtons } = useMenuBar();
  return (
    <S.ButtonWrapper>
      <Button.Group basic size={'massive'}>
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
  );
}

export default MenuBarButtons;
