import React from 'react';
import { Button } from 'semantic-ui-react';
import FontSizeList from '@ingredients/FontSizeList';
import FontColor from '@ingredients/FontColor';
import useFormatButtons from './useFormatButtons';
import * as S from './style';

function TemplateButtons() {
  const { sizeMenu, toggleSizeMenu, alignHandler, clearHandler } = useFormatButtons();
  const [fontColorState, setFontColorState] = useState(false);
  const fontColorHandler = () => {
    setFontColorState(!fontColorState);
  };
  
  return (
    <>
      <S.TemplateButtonsContainer>
        <Button.Group basic>
          <Button icon="text height" onClick={() => toggleSizeMenu()} />
          {sizeMenu && <FontSizeList toggleSizeMenu={toggleSizeMenu} />}
          <Button icon="tint" onClick={fontColorHandler} />
          {fontColorState && <FontColor />}
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
