import styled from '@emotion/styled';

export const IconMessageContainer = styled.div``;

export const IconMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  position: fixed;
  bottom: 70px;
  height: auto;
  background-color: #f3f3f3;
  font-size: 20px !important;
  padding: 10px;
  border-radius: 0.5em;
  border: 1px solid #dddddd;
  :after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: 20px;
    top: 39px;
    right: auto;
    width: 20px;
    height: 20px;
    background: #f3f3f3;
    border-bottom: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;

export const IconMessageTitle = styled.span``;
