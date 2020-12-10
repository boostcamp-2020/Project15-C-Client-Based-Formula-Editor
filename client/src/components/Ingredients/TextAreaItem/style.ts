import styled from '@emotion/styled';
import { TextAreaItemProps } from './index';

export const TextArea = styled.textarea<TextAreaItemProps>`
  width: ${(props) => props.width};
  height: 100%;
  resize: none;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;
