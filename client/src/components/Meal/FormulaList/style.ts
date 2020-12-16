import styled from '@emotion/styled';

export const FormulaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
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
    min-width: 60px;
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
  left: 50%;
  transform: translate(-50%);
  margin: 10px auto;
  padding: 0;
  border: 1px solid #bdbdbd;
  background: #f6f8fa;
  overflow-y: auto;
  z-index: 99999;
  list-style: none;
`;
