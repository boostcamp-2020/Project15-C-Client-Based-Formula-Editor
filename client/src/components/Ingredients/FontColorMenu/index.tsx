import React from 'react';
import styled from '@emotion/styled';
import { CompactPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { changeFontColor } from '@contexts/latex';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';

export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  margin-top: 40px;
  background: white;
  z-index: 99999;
  line-height: 0;
`;

function FontColor() {
  const { currentTab, totalLatex } = useSelector((state: RootState) => state.latex);
  const currentFontColor = totalLatex[currentTab].fontColor;
  const dispatch = useDispatch();

  const handleChangeComplete = (fontColor: any) => {
    dispatch(changeFontColor(fontColor.hex));
  };
  return (
    <FontContainer>
      <CompactPicker color={currentFontColor} onChange={handleChangeComplete} />
    </FontContainer>
  );
}

export default FontColor;
