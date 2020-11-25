import styled from '@emotion/styled';
interface FormulaItemStyleProps {
  image: string;
}

export const FormulaItem = styled.button<FormulaItemStyleProps>`
  background: url(${(props) => `./image/${props.image}`});
  width: 60px;
  height: 60px;
  background-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  background-repeat: no-repeat;
  &:hover {
    /* filter: invert(14%) sepia(100%) saturate(7493%) hue-rotate(1deg) brightness(106%) contrast(110%); */
    border: 4px dashed #6d9eeb;
  }
`;
