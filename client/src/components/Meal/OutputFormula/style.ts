import styled from '@emotion/styled';

interface FormulaProps {
  fontSize?: string;
  fontColor?: string;
  textAlign?: string;
}

export const OutputFormulaWrapper = styled.div`
  border: 1px solid #d4d4d5;
  border-radius: 0 5px 5px 5px;
  height: 100%;
  padding: 7px;
  position: relative;
`;

export const OutputFormulaBox = styled.div<FormulaProps>`
  position: relative;
  border: 1px solid #bdbdbd;
  height: 100%;
  padding: 10px;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  text-align: ${(props) => props.textAlign};
`;

export const OutputFormulaContent = styled.span`
  display: inline-block;
`;

export const StartButtonBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  margin-right: 3px;
  z-index: 2;
`;
