import styled from '@emotion/styled';
interface DropDownItemStyleProps {
  header: string;
}

export const DropDownItemStyle = styled.button<DropDownItemStyleProps>`
  background: url(${(props) => `./image/${props.header}`});
  width: 60px;
  height: 100%;
  background-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  background-repeat: no-repeat;
  &:hover {
    /* filter: invert(14%) sepia(100%) saturate(7493%) hue-rotate(1deg) brightness(106%) contrast(110%); */
    border: 4px dashed #6d9eeb;
  }
`;
