import styled from '@emotion/styled';

export const DictionaryItemList = styled.div`
  margin-top: 13px;
  margin-right: 1px;
  overflow: auto;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 7px;
  height: 137px;
  & td {
    padding: 7px 15px !important;
  }

  & table {
    border: none !important;
  }

  & tr:hover {
    cursor: pointer;
  }

  & span:hover {
    cursor: pointer;
  }
`;
