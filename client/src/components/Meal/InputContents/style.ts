import styled from '@emotion/styled';

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  & .tab {
    padding: 7px !important;
    height: 100%;
  }
  & > div > .active {
    display: flex !important;
    flex-direction: column;
    height: 100%;
  }
`;
