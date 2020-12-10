import styled from '@emotion/styled';
import { getImageURL } from '@utils/util';

export const FormulaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 90%;
  height: 100%;
`;

export const HeaderWraaper = styled.div`
  display: flex;
`;

export const FormulaHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 1px solid #d4d4d5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-right: 20px;
  & button {
    min-width: 60px;
  }
`;

export const SymbolHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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
  width: ${(props) =>
    props.header.includes('svg')
      ? props.length > 20
        ? '712px'
        : '702px'
      : props.length > 60
      ? '712px'
      : '702px'};
  max-height: 142px;
  position: absolute;
  top: 70px;
  margin: 10px auto;
  padding: 0;
  border: 1px solid #bdbdbd;
  background: #eaeaea;
  overflow-y: auto;
  z-index: 99999;
  list-style: none;
`;
