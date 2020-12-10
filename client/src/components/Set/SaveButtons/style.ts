import styled from '@emotion/styled';

export const SaveButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 7px;
  height: 100%;
  flex-basis: 135px;
  flex-shrink: 0;
  & > div {
    margin-top: auto !important;
  }
  padding-bottom: 10px;
`;

export const Img = styled.img`
  border: 0.1px solid #d4d4d5;
  border-radius: 5px;
  margin-top: 6px;
  width: 114px;
  &:hover {
    cursor: pointer;
  }
`;
