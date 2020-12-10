import styled from '@emotion/styled';

export const MenuBarContainer = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #d4d4d5;
  background: #f3f3f3;
  display: flex;
  justify-content: space-around;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  min-width: 50px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #d4d4d5;
  border-right: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelIcon = styled.div``;

export const LabelText = styled.div``;

export const OutputWrapper = styled.div`
  width: 30%;
  margin: 10px;
  display: flex;
`;

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
export const IconWrapper = styled.div`
  width: 50px;
  & i {
    width: 100% !important;
  }
`;

export const TextAreaItemWrapper = styled.div`
  width: 30%;
  margin: 10px;
  display: flex;
`;

export const Logo = styled.div`
  height: 100%;
  width: 65px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const LogoImg = styled.img`
  width: 60px;
  margin-top: 10px;
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

export const MessageContainer = styled.div`
  position: fixed;
  margin: 0px auto;
  left: 0;
  right: 0;
  width: 50%;
`;
