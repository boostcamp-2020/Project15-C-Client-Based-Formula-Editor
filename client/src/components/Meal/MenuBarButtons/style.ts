import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  padding-top: 10px;
  & div > button {
    height: 100%;
    padding: 15px 10px 10px 10px !important;
    align-self: center;
    & i {
      font-size: 1.5em;
    }
  }
  & div > div {
    height: 60px;
  }
  & div > div > div {
    height: 50px;
  }
`;
