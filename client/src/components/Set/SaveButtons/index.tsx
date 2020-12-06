import React from 'react';
import SaveButtonsContainer from './style';
import { Button } from 'semantic-ui-react';
import useSaveButtons from './useSaveButtons';

function SaveButtons() {
  const { onClickLoginHandler } = useSaveButtons();

  return (
    <SaveButtonsContainer>
      <Button.Group basic vertical>
        <Button content="로그인" onClick={onClickLoginHandler} />
        <Button content="이미지 저장" />
        <Button content="텍스트 저장" />
        <Button content="화면 저장" />
      </Button.Group>
    </SaveButtonsContainer>
  );
}

export default SaveButtons;
