import styled from '@emotion/styled';

export const FontContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 1px solid red;
  position: absolute;
  width: 70px;
  margin-top: 35px;
  background: white;
  z-index: 99999;
`;

export const FontWapper = styled.div`
  display: flex;
  border: 1px solid red;
  color: red;
  font-size: 14px;
  padding: 5px 2px 5px 7px;
  text-align: left;
  z-index: 99999;
  span {
    background: white;
  }
`;
