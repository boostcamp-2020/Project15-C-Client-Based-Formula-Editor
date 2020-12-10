import styled from '@emotion/styled';
import { TextAreaItemProps } from './index';

export const TextArea = styled.textarea<TextAreaItemProps>`
  width: ${(props) => props.width};
  height: 100%;
  resize: none;
  border: 1px solid #bdbdbd;
  padding: 10px;
`;

export const RecommendContainer = styled.div`
  width: 20%;
  height: 50%;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  position: fixed;
  top: 75%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 5;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    overflow-y: auto;

    & li {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & img {
        width: 80%;
      }
    }
  }
`;
