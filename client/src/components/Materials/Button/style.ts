import styled from '@emotion/styled';
interface ButtonStyleProps {
  header: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  background: url(${(props) => `./image/${props.header}`});
  width: 60px;
  height: 100%;
  background-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  &:hover {
    /* filter: invert(14%) sepia(100%) saturate(7493%) hue-rotate(1deg) brightness(106%) contrast(110%); */
    border: 4px dashed #6d9eeb;
  }
`;
