import styled from '@emotion/styled';

export const FavoriteContainer = styled.div`
  padding: 12px;
  flex: 0px;
  overflow-y: auto;

  & table {
    width: 100% !important;

    & thead tr th:first-of-type {
      width: 70px;
    }
    & tbody tr td:last-of-type {
      overflow-x: auto !important;
    }

    & .label {
      margin-left: 10px !important;
    }
  }
`;
