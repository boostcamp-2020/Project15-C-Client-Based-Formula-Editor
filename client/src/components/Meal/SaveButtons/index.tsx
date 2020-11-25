import React from 'react';
import SaveButtonsContainer from './style';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

function SaveButtons() {
  return (
    <SaveButtonsContainer>
      <Button.Group basic vertical>
        <Button content="이미지로 저장" size="medium" />
        <Button content="텍스트로 저장" />
        <Button content="화면에 저장" />
      </Button.Group>
    </SaveButtonsContainer>
  );
}

export default SaveButtons;
