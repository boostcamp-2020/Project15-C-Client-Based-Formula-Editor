import styled from '@emotion/styled';

export const FormulaContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  height: 100%;
`;

export const FormulaHeaderWrapper = styled.div`
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  white-space: nowrap;
`;
export const SymbolHeaderWrapper = styled.div`
  margin-left: 3px;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  white-space: nowrap;
  & button {
    background-size: contain;
  }
`;

export const Contents = styled.div`
  display: none;
  flex-wrap: wrap;
  background: lightgrey;
  width: 70%;
  max-width: 1000px;
  margin: 10px auto;
  position: relative;
  overflow-y: auto;
  max-height: 140px;
  z-index: 99999;
`;
