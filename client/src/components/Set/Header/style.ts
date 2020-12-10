import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  border-top: 1px solid #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  width: 100%;
  height: 74px;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  height: 100%;
  width: 65px;
  margin-left: 20px;
`;

export const LogoImg = styled.img`
  margin-top: 5px;
  height: 90%;
  width: 65px;
`;

export const ButtonWrapper = styled.div`
  margin-right: 20px;
  & div {
    height: 50px;
  }
  & div > button {
    height: 100%;
    padding: 15px 10px 10px 10px !important;
    align-self: center;
    & i {
      padding-top: 3px;
      font-size: 2em;
    }
  }
`;
