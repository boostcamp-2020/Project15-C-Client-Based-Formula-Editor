import RecommendItem from '@ingredients/RecommendItem';
import React from 'react';
import useTextAreaItem from './useTextAreaItem';
import * as S from './style';

export interface TextAreaItemProps {
  width: string;
}

function TextAreaItem({ width }: TextAreaItemProps) {
  const {
    currentTabInfo,
    onChangeHandler,
    isShow,
    onKeyPress,
    recommend,
    clearAndCloseRecommend,
    maxNumber,
    onScroll,
  } = useTextAreaItem();

  return (
    <S.TextAreaContainer width={width}>
      <S.TextArea
        value={currentTabInfo.latex}
        onChange={onChangeHandler}
        onKeyDown={onKeyPress}
        isShow={isShow}
      />
      {isShow && (
        <>
          <S.Divider></S.Divider>
          <S.RecommendContainer>
            <span>추천 Tex</span>
            <ul onScroll={onScroll}>
              {recommend.slice(0, maxNumber).map((item, index) => (
                <RecommendItem
                  key={`${item.latex}${index}`}
                  currentLatex={currentTabInfo.latex}
                  clearAndCloseRecommend={clearAndCloseRecommend}
                  latex={item.latex}
                  image={item.image}
                />
              ))}
            </ul>
          </S.RecommendContainer>
        </>
      )}
    </S.TextAreaContainer>
  );
}

export default TextAreaItem;
