import React, { useState } from 'react';
import * as S from './style';
import { Button } from 'semantic-ui-react';
import FontSizeList from '@ingredients/FontSizeList';
import FontColor from '@ingredients/FontColor';

function TemplateButtons() {
  const [fontSizeState, setFontSizeState] = useState(false);
  const fontSizeHandler = () => {
    setFontSizeState(!fontSizeState);
  };
  const [FontColorState, setFontColorState] = useState(false);
  const FontColorHandler = () => {
    setFontColorState(!FontColorState);
  };
  return (
    <>
      <S.TemplateButtonsContainer>
        <Button.Group basic>
          <Button icon="text height" onClick={fontSizeHandler} />
          {fontSizeState && <FontSizeList />}
          <Button icon="tint" onClick={FontColorHandler} />
          {FontColorState && <FontColor />}
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="align left" />
          <Button icon="align center" />
          <Button icon="align right" />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="eraser" />
        </Button.Group>
      </S.TemplateButtonsContainer>
    </>
  );
}

export default TemplateButtons;
