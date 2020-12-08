import styled from '@emotion/styled';

export const DictionaryHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DictionaryMenu = styled.select`
  height: 30px;
  color: #444;
  padding: 5px 10px;
  background: #f3f3f3;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;

export const DictionarySearch = styled.input`
  width: 190px;
  height: 30px;
  color: #444;
  padding: 5px 10px;
  background: #f3f3f3;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
`;

export const Temp = styled.div`
  width: 100%;
  & input {
    width: 100%;
    font-size: 1em;
    padding: 0.35em;
    box-sizing: border-box;
  }
  & div {
    width: 190px;
  }
  & div > div {
    width: 190px;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgb(228, 225, 225);
    border: 1px solid black;
    border-radius: 0.25em;
  }
  & div > div:hover {
    padding: 0.5em;
    box-sizing: border-box;
    background: rgb(187, 183, 183);
    border: 1px solid black;
    border-radius: 0.25em;
    cursor: pointer;
    font-weight: bold;
  }
`;
export const Temp2 = styled.div`
  border: 1px solid black;
  position: fixed;
`;
