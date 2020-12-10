import styled from '@emotion/styled';

export const TextAreaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  background-color: white;
  padding: 10px;
  position: relative;
`;
interface TextAreaProps {
  isShow: boolean;
}
export const TextArea = styled.textarea<TextAreaProps>`
  width: ${(props) => (props.isShow ? '70%' : '100%')};
  height: 100%;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const RecommendContainer = styled.div`
  width: 30%;
  height: 90%;
  position: absolute;
  top: 9px;
  right: 0;
  border-radius: 5px;
  background: white;
  overflow: hidden;
  text-align: center;
  & > span {
    font-weight: bold;
    font-size: 1.2rem;
  }
  & ul {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0.5rem;
    margin: 0;
    overflow-y: auto;
  }
`;

export const Divider = styled.div`
  height: 100%;
  border-right: 1px solid #bdbdbd;
`;
