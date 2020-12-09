import styled from '@emotion/styled';

export const MenuBarContainer = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #d4d4d5;
  background: #f3f3f3;
  display: flex;
  justify-content: space-around;
`;

export const OutputWrapper = styled.div`
  width: 30%;
`;
export const ButtonWrapper = styled.div`
  margin-right: 10px;
  & div {
    height: 80px;
    margin-top: 10px !important;
  }
  & div > button {
    height: 100%;
    padding: 27px 10px 10px 10px !important;
    align-self: center;
    & i {
      font-size: 2em;
      margin-top: 10px !important;
    }
  }
`;
export const IconWrapper = styled.div`
  width: 50px;
  & i {
    width: 100% !important;
  }
`;

export const TextAreaItemWrapper = styled.div`
  width: 30%;
  margin: 10px;
`;

export const Logo = styled.div`
  height: 100%;
  width: 65px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const LogoImg = styled.img`
  width: 65px;
  margin-top: 15px;
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
