import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ChromePicker } from 'react-color';

interface FontColorType {
  background: string;
}

interface FontColorComponent {
  handler: () => void;
}

export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  margin-top: 40px;
  background: white;
  z-index: 99999;
  line-height: 0;
`;

function FontColor({ handler }: FontColorComponent) {
  const [colorState, setColorState] = useState<string>('#000');
  const handleChangeComplete = (color: any) => {
    setColorState(color.hex);
  };
  return (
    <FontContainer>
      <ChromePicker color={colorState} onChangeComplete={handleChangeComplete} />;
    </FontContainer>
  );
}

export default FontColor;
