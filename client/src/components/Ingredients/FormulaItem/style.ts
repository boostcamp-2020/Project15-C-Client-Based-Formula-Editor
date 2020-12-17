import styled from '@emotion/styled';
import { getImageURL } from '@utils/util';

interface FormulaItemStyleProps {
  image?: string;
  isSvg: boolean;
}

export const FormulaItem = styled.li<FormulaItemStyleProps>`
  background: url(${(props) => getImageURL(props.image)});
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
    filter: invert(55%) sepia(56%) saturate(430%) hue-rotate(302deg) brightness(86%) contrast(94%);
    font-size: 1.5rem;
  }
`;

export const InsertWrapper = styled.div`
  width: 140px;
  height: 70px;
  border-right: 0.5px solid #d5d5d5;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    width: 50px;
    height: 25px;
  }

  & .label {
    padding-top: 6.5px !important;
    height: 25px;
  }

  & > div:first-of-type {
    margin-right: 8px;
  }

  & i:hover {
    cursor: pointer;
    filter: invert(55%) sepia(56%) saturate(430%) hue-rotate(302deg) brightness(86%) contrast(94%);
  }
`;

export const InsertCotnets = styled.div`
  display: flex;
  flex-direction: column;
  & div:first-of-type {
    margin-bottom: 4px;
  }
`;
