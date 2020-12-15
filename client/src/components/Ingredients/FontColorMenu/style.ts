import styled from '@emotion/styled';

export const FontColorPicker = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
`;

export const FontColorDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: red;
  z-index: 9999;
`;
