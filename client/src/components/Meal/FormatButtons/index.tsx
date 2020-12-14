import React from 'react';
import { Button } from 'semantic-ui-react';
import FontSizeMenu from '@ingredients/FontSizeMenu';
import FontColorMenu from '@ingredients/FontColorMenu';
import useFormatButtons from './useFormatButtons';
import * as S from './style';

function FormatButtons() {
  const {
    sizeRef,
    sizeMenu,
    toggleSizeMenu,
    colorRef,
    alignHandler,
    clearHandler,
  } = useFormatButtons();

  return (
    <>
      <S.FormatButtonsContainer>
        <Button.Group basic>
          <div ref={sizeRef}>
            <Button icon="text height" onClick={toggleSizeMenu} />
          </div>
          {sizeMenu && <FontSizeMenu toggleSizeMenu={toggleSizeMenu} />}
          <S.CololrDiv ref={colorRef}>
            <Button icon="tint" />
            <FontColorMenu />
          </S.CololrDiv>
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="align left" onClick={() => alignHandler('left')} />
          <Button icon="align center" onClick={() => alignHandler('center')} />
          <Button icon="align right" onClick={() => alignHandler('right')} />
        </Button.Group>{' '}
        <Button.Group basic>
          <Button icon="eraser" onClick={clearHandler} />
        </Button.Group>
      </S.FormatButtonsContainer>
    </>
  );
}

export default FormatButtons;
