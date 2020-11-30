import React, { useState } from 'react';
import * as S from './style';
import { Button } from 'semantic-ui-react';
import FontSizeList from '@ingredients/FontSizeList';

function TemplateButtons() {
  const [fontSizeState, setFontSizeState] = useState(false);
  const fontSizeHandler = () => {
    setFontSizeState(!fontSizeState);
  };
  return (
    <>
      <S.TemplateButtonsContainer>
        <Button.Group basic>
          <Button icon="text height" onClick={fontSizeHandler} />
          {fontSizeState && <FontSizeList />}
          <Button icon="tint" />
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
