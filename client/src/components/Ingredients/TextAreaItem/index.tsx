import RecommendItem from '@ingredients/RecommendItem';
import React from 'react';
import useTextAreaItem from './useTextAreaItem';
import * as S from './style';

interface TextAreaItem {
  size: string;
}

function TextAreaItem({ size }: TextAreaItem) {
  const {
    currentTabInfo,
    onChangeHandler,
    isShow,
    onKeyDown,
    onKeyUp,
    recommend,
    clearAndCloseRecommend,
    maxNumber,
    onScroll,
  } = useTextAreaItem();

  return (
    <S.TextAreaContainer>
      <S.TextArea
        value={currentTabInfo.latex}
        onChange={onChangeHandler(size)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        isShow={isShow}
      />
      {size === 'big' && isShow && (
        <>
          {/* <S.Divider></S.Divider> */}
          <S.RecommendContainer>
            <S.Span>Tex Recommendation</S.Span>
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
