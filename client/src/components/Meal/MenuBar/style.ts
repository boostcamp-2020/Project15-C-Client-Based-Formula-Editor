import styled from '@emotion/styled';

export const MenuBarContainer = styled.div`
  height: 100%;
  width: 100%;
  background: green;
  display: flex;
`;

export const OutputWrapper = styled.div`
  width: 30%;
`;
export const ButtonWrapper = styled.div`
  & div {
    height: 100%;
  }
  & div > button {
    height: 100%;
    padding: 10px !important;
    align-self: center;
    & i {
      font-size: 2em;
    }
  }
`;
export const IconWrapper = styled.div`
  width: 50px;
  & i {
    width: 100% !important;
  }
`;

export const Logo = styled.div`
  height: 100%;
  width: 65px;
  margin-left: 20px;
`;

export const LogoImg = styled.img`
  margin-top: 5px;
  width: 65px;
`;

export const Img = styled.img`
  border: 0.1px solid #d4d4d5;
  border-radius: 5px;
  margin-top: 6px;
  width: 114px;
  &:hover {
    cursor: pointer;
  }
`;
