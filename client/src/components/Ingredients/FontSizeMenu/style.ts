import styled from '@emotion/styled';

export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 1px solid rgb(212, 212, 213);
  border-top: none;
  position: absolute;
  width: 78px;
  margin-top: 37px;
  background: white;
  z-index: 99999;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const FontWapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 14px;
  padding: 5px 2px 5px 7px;
  cursor: pointer;
  &:hover {
    color: #00cc00;
  }
`;

export const FontSizeText = styled.span`
  background: white;
  padding-left: 5px;
`;

export const FontSizeClicked = styled.span`
  background: white;
  padding-right: 5px;
  color: green;
`;
