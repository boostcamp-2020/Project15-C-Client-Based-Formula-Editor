import React from 'react';
import * as S from './style';
import { Button, Icon } from 'semantic-ui-react';

function TemplateButtons() {
  return (
    <S.TemplateButtonsContainer>
      <Button.Group basic>
        <Button icon="text height" />
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
  );
}

export default TemplateButtons;
