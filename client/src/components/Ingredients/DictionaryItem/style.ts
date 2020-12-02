import styled from '@emotion/styled';

export const DictionaryItem = styled.li`
  border-bottom: 1px solid grey;
  cursor: pointer;
  padding: 5px;
  width: 800px;

  &:hover {
    background: #f3f3f3;
  }

  & span {
    cursor: pointer;
  }
`;
