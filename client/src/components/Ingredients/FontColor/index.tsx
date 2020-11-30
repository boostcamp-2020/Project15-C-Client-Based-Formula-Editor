import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { changeFontSize } from '@contexts/latex';

export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 1px solid red;
  position: absolute;
  width: 70px;
  margin-top: 35px;
  background: white;
  z-index: 99999;
`;

function FontColor() {
  return <FontContainer>ㅎㅇ</FontContainer>;
}

export default FontColor;
