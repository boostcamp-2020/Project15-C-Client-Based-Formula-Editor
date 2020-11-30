import React, { useState } from 'react';
import * as S from './style';
import { Button } from 'semantic-ui-react';
import FontSizeList from '@ingredients/FontSizeList';
import { useDispatch } from 'react-redux';
import { changeTextAlign } from '@contexts/latex';
function TemplateButtons() {
  const dispatch = useDispatch();
  const [fontSizeState, setFontSizeState] = useState(false);
  const fontSizeHandler = (): void => {
    setFontSizeState(!fontSizeState);
  };
  const alignHandler = (direction: string): void => {
    dispatch(changeTextAlign(direction));
  };
  return (
    <>
      <S.TemplateButtonsContainer>
        <Button.Group basic>
          <Button icon="text height" onClick={fontSizeHandler} />
          {fontSizeState && <FontSizeList fontSizeHandler={fontSizeHandler} />}
          <Button icon="tint" />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="align left" onClick={() => alignHandler('left')} />
          <Button icon="align center" onClick={() => alignHandler('center')} />
          <Button icon="align right" onClick={() => alignHandler('right')} />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="eraser" />
        </Button.Group>
      </S.TemplateButtonsContainer>
    </>
  );
}

export default TemplateButtons;
