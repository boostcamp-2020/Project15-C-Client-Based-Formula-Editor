import styled from '@emotion/styled';

export const CalculatorContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const CalculatorInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-basis: 50%;
  border: 1px solid green;
  overflow-x: auto;

  .active-angle {
    background-color: #1d1d1d;
    color: #fff;
  }

  #calculate {
    width: 90px;
    min-width: 76px;
    color: #fff;
    background-color: #46e0bc;
  }

  #delete {
    color: #fff;
    background-color: #e05046;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
`;

export const ButtonItem = styled.button`
  width: 45px;
  min-width: 38px;
  height: 30px;
  text-align: center;
  &: hover {
    cursor: pointer;
  }
`;

export const CalculatorOutputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
  height: 100%;
  border: 1px solid green;
`;

export const OutputOperation = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 30px;
`;

export const OutputResult = styled.button`
  border: 1px solid purple;
  width: 100%;
  height: 30px;
  &: hover {
    cursor: pointer;
  }
`;
