import React from 'react';
import { Button } from 'semantic-ui-react';
import FontSizeList from '@ingredients/FontSizeList';
import useFormatButtons from './useFormatButtons';
import * as S from './style';

function TemplateButtons() {
  const { sizeMenu, toggleSizeMenu, alignHandler, clearHandler } = useFormatButtons();

  return (
    <>
      <S.TemplateButtonsContainer>
        <Button.Group basic>
          <Button icon="text height" onClick={() => toggleSizeMenu()} />
          {sizeMenu && <FontSizeList fontSizeHandler={toggleSizeMenu} />}
          <Button icon="tint" />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="align left" onClick={() => alignHandler('left')} />
          <Button icon="align center" onClick={() => alignHandler('center')} />
          <Button icon="align right" onClick={() => alignHandler('right')} />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="eraser" onClick={clearHandler} />
        </Button.Group>
      </S.TemplateButtonsContainer>
    </>
  );
}

export default TemplateButtons;
