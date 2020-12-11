import styled from '@emotion/styled';

export const ResizeHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
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
