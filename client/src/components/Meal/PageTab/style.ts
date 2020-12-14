import styled from '@emotion/styled';

export const TabContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: 110px;
  margin-right: 10px;
  align-items: center;

  & .menu {
    width: 100% !important;
  }

  & .ui.vertical.menu .item > .label {
    background: #d76f7e !important;
  }

  & button {
    background: #d76f7e !important;
    color: white !important;
  }
`;
