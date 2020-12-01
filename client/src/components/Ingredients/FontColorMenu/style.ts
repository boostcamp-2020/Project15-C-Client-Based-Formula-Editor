import styled from '@emotion/styled';

export const FontColorPicker = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;

  &:hover {
    cursor: pointer;
  }
`;
