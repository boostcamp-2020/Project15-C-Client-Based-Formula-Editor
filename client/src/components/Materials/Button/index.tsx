import React, { ReactChildren } from 'react';
import styled from '@emotion/styled';
import { LatexHeader, LatexContent } from '../../../lib/constants/latex-header';
interface ButtonStyleProps {
  header: string;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  background: url(${(props) => `./image/${props.header}`});
  width: 60px;
  height: 100%;
  background-position: center;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    filter: invert(14%) sepia(100%) saturate(7493%) hue-rotate(1deg) brightness(106%) contrast(110%);
    border: none;
  }
`;

interface ButtonProps {
  children?: ReactChildren | string;
  onMouseOver: (e: React.MouseEvent) => void;
  setNowFormula: (formula: LatexContent[]) => void;
  latex: LatexHeader;
}

function Button({ children, onMouseOver, latex, setNowFormula }: ButtonProps) {
  const customMouseOver = (e: React.MouseEvent) => {
    onMouseOver(e);
    setNowFormula(latex.content);
  };
  return (
    <ButtonStyle header={latex.header} onMouseOver={customMouseOver}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
