import styled from '@emotion/styled';
interface FormulaItemStyleProps {
  image: string;
}

export const FormulaItem = styled.button<FormulaItemStyleProps>`
  background: url(${(props) => `./image/${props.image}`});
  width: ${(props) => (props.image.includes('b') ? '140px' : '70px')};
  height: 70px;
  background-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  background-repeat: no-repeat;
  &:hover {
    border: 4px dashed #6d9eeb;
  }
`;