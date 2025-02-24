import styled from '@emotion/styled';

export const CalculatorContainer = styled.div`
  display: flex;
  padding: 5px;
  height: 100%;
`;

export const CalculatorInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-basis: 355px;
  overflow-x: auto;
  min-width: 350px;
  .active-angle {
    background-color: #1d1d1d !important;
    color: #fff !important;
  }

  #calculate {
    width: 83px;
    color: #fff;
    background-color: #46e0bc;
  }

  #delete {
    color: #fff;
    background-color: #e05046;
  }

  & button {
    width: 40px;
    padding: 0 !important;
    background: #eaeaea;
    height: 28px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
`;

export const ButtonItem = styled.button`
  width: 40px;
  min-width: 30px;
  height: 30px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CalculatorOutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  @media screen and (max-width: 1250px) {
    & .ui.labeled.icon.button > div {
      display: none;
    }
  }
  & .ui.labeled.icon.button {
    padding-right: 25px !important;
    padding-top: 5px !important;
    width: 100%;
    height: 30px;
  }
`;

export const OutputOperation = styled.textarea`
  height: 100%;
  margin-bottom: 10px;
  margin-right: 5px;
  border: 2px solid #e0e1e2;
  resize: none;
  padding: 10px;
  font-size: 20px;
  width: 100%;
`;

export const OutputResult = styled.button`
  width: 100%;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
