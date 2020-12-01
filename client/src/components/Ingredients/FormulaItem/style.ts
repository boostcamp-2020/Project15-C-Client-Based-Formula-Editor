import styled from '@emotion/styled';
interface FormulaItemStyleProps {
  image?: string;
  isSvg: boolean;
}

export const FormulaItem = styled.li<FormulaItemStyleProps>`
  background: url(${(props) => `./image/${props.image}`});
  background-size: 100%;
  width: ${(props) => (!props.isSvg ? '35px' : props.image?.includes('b') ? '140px' : '70px')};
  height: ${(props) => (!props.isSvg ? '35px' : '70px')};
  font-size: 1rem;
  text-align: center;
  line-height: 35px;
  background-position: center;
  cursor: pointer;
  border: none;
  border-right: 0.5px solid #d5d5d5;
  border-bottom: 0.5px solid #d5d5d5;
  background-repeat: no-repeat;
  transition: font-size 0.3s, color 0.3s, background-size 0.3s;

  &:hover {
    background-size: 120%;
    border: 0.5px solid black;
    filter: invert(63%) sepia(13%) saturate(2335%) hue-rotate(87deg) brightness(91%) contrast(83%);
    font-size: 1.5rem;
  }
`;
