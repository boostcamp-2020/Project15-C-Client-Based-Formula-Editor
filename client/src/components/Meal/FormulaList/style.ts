import styled from '@emotion/styled';
import { getImageURL } from '@utils/util';

export const FormulaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  height: 100%;
`;
export const HeaderWraaper = styled.div`
  display: flex;
`;
export const Logo = styled.div`
  width: 100px;
  background-color: darkblue;
`;

export const UserButtonsContainer = styled.div``;

export const LoginButton = styled.div`
  background: url(${() => getImageURL('login.png')});
  width: 100px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const LogoutButton = styled.div`
  background: url(${() => getImageURL('logout.png')});
  width: 100px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FormulaHeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid #d4d4d5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-right: 20px;
`;

export const SymbolHeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 3px;
  border-left: 1px solid #d4d4d5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  & button {
    background-size: contain;
  }
  padding-left: 10px;
`;

interface FormulaListFrops {
  header: string;
  length: number;
}

export const FormulaList = styled.ul<FormulaListFrops>`
  display: none;
  flex-wrap: wrap;
  // TODO: 반응형으로 브라우저 좌우 크기 줄어들 때 크기 다 constants에 상수화
  max-width: ${(props) =>
    props.header.includes('svg')
      ? props.length > 20
        ? '712px'
        : '702px'
      : props.length > 60
      ? '712px'
      : '702px'};
  max-height: 142px;
  position: relative;
  margin: 10px auto;
  padding: 0;
  border: 1px solid #bdbdbd;
  background: #eaeaea;
  overflow-y: auto;
  z-index: 99999;
  list-style: none;
`;
