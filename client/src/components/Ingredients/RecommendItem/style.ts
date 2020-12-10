import styled from '@emotion/styled';

export const RecommendWrapper = styled.li`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const RecommendLatexWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 1.5rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RecommendImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    transform: scale(1.4);
  }
`;
