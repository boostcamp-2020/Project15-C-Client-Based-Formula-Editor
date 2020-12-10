import styled from '@emotion/styled';
import { OutputFormulaProps } from './index';

interface FormulaProps {
  fontSize?: string;
  fontColor?: string;
  textAlign?: string;
  backgroundColor?: string;
}

export const OutputFormulaWrapper = styled.div<OutputFormulaProps>`
  border: ${(props) => props.border};
  border-radius: 0 5px 5px 5px;
  height: 100%;
  padding: ${(props) => (props.padding ? '10px' : '7px')};
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
  margin-top: 5px;
  margin-right: 3px;
  z-index: 2;
  & i {
    color: #f7d100;
    cursor: pointer;
    //color: #FEE100;
    //밑이 카카오톡 색
  }
`;
