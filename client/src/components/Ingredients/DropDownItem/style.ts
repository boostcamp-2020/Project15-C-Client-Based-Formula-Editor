import styled from '@emotion/styled';
import { getImageURL } from '@utils/util';

interface DropDownItemStyleProps {
  header?: string;
}

export const DropDownItemStyle = styled.button<DropDownItemStyleProps>`
  background: url(${(props) => getImageURL(props.header)});
  width: 60px;
  height: 60px;
  padding-bottom: 6px;
  font-size: 2rem;
  font-weight: bold;
  background-position: center;
  cursor: pointer;
  border: 4px solid transparent;
  background-repeat: no-repeat;
  filter: invert(28%) sepia(9%) saturate(10%) hue-rotate(1deg) brightness(91%) contrast(83%);
  outline: 0;
  &:focus {
    border: 4px dashed #6d9eeb;
  }
  &:hover {
    border: 4px dashed #6d9eeb;
  }
`;
