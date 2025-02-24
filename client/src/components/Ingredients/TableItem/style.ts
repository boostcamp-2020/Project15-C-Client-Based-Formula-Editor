import styled from '@emotion/styled';

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  & > div {
    &:hover {
      cursor: pointer;
    }
    & .ui.mini.label {
      background: rgb(215, 111, 126) !important;
      color: white !important;
    }
  }
`;

export const TableWrapper = styled.div`
  margin-left: auto;
`;

export const TableSpan = styled.span`
  &:hover {
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
  }
`;
