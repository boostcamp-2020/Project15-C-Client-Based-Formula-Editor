import styled from '@emotion/styled';
import { OutputFormulaProps } from '@meal/OutputFormula/index';

export const OutputFormulaBox = styled.div<OutputFormulaProps>`
  width: ${(props) => props.width};
  position: relative;
  border: 1px solid #bdbdbd;
  height: 100%;
  padding: 10px;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  text-align: ${(props) => props.textAlign};
  background: ${(props) => props.backgroundColor && props.backgroundColor};
  overflow-x: auto;
`;

export const OutputFormulaContent = styled.span`
  display: inline-block;
`;

export const StarButtonBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
  margin-right: 1px;
  z-index: 2;
  & i {
    color: #f7d100;
    cursor: pointer;
    //color: #FEE100;
    //밑이 카카오톡 색
  }
`;
