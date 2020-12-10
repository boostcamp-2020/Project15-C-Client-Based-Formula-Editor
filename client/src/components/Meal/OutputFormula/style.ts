import styled from '@emotion/styled';
import { OutputFormulaProps } from './index';

export const OutputFormulaWrapper = styled.div<OutputFormulaProps>`
  border: ${(props) => props.border};
  border-radius: 0 5px 5px 5px;
  height: 100%;
  padding: ${(props) => (props.padding ? '10px' : '7px')};
  position: relative;
`;
