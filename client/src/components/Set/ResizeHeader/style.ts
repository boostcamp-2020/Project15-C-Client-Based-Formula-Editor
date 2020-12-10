import styled from '@emotion/styled';

export const ResizeHeaderContainer = styled.div`
  height: auto;
  position: absolute;
  width: 100%;
  bottom: 0;
  animation: slidein 0.5s;
  @keyframes slidein {
    from {
      opacity: 0;
      scale: 0;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;
