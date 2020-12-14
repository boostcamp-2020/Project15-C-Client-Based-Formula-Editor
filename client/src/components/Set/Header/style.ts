import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
  border-bottom: 1px solid #e1e4e8;
  background-color: #f6f8fa;
  width: 100%;
  height: 74px;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  height: 100%;
  width: 65px;
  margin-left: 15px;
`;

export const LogoImg = styled.img`
  margin-top: 5px;
  height: 90%;
  width: 65px;
`;

export const ButtonWrapper = styled.div`
  margin: 0px 20px;
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
