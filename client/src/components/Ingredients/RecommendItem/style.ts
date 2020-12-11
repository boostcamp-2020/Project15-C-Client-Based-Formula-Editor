import styled from '@emotion/styled';

export const RecommendWrapper = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  padding-left: 5px;
  border-top: 1px dashed #a6a6a6;
`;

export const RecommendLatexWrapper = styled.div`
  width: 40%;
  height: 100%;
  text-align: left;
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export const RecommendImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    transform: scale(1.6);
  }
`;
