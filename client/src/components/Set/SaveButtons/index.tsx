import React from 'react';
import useSaveButtons from './useSaveButtons';
import { Button } from 'semantic-ui-react';
import SaveButtonsContainer from './style';

function SaveButtons() {
  const { downloadImage, downloadText, onClickLoginHandler } = useSaveButtons();

  return (
    <SaveButtonsContainer>
      <Button.Group basic vertical>
        <Button content="이미지 저장" onClick={downloadImage} />
        <Button content="텍스트 저장" onClick={downloadText} />
        <Button content="화면 저장" />
      </Button.Group>
    </SaveButtonsContainer>
  );
}

export default SaveButtons;
