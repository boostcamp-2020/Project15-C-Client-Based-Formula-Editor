import styled from '@emotion/styled';
interface FormulaProps {
  fontSize?: string;
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
  border: 1px solid #bdbdbd;
  height: 100%;
  padding: 10px;
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.textAlign};
`;
