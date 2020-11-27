import styled from '@emotion/styled';

export const FormulaContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  height: 100%;
`;

export const FormulaHeaderWrapper = styled.div`
  border-right: 1px solid #d4d4d5;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  white-space: nowrap;
  padding-right: 20px;
`;
export const SymbolHeaderWrapper = styled.div`
  margin-left: 3px;
  border-left: 1px solid #d4d4d5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.3rem;
  overflow-x: auto;
  white-space: nowrap;
  & button {
    background-size: contain;
  }
  padding-left: 10px;
`;

export const Contents = styled.div`
  display: none;
  border: 1px solid #bdbdbd;
  flex-wrap: wrap;
  background: #eaeaea;
  width: 70%;
  max-width: 983px;
  margin: 10px auto;
  position: relative;
  overflow-y: auto;
  max-height: 160px;
  z-index: 99999;
`;
