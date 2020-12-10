import RecommendItem from '@ingredients/RecommendItem';
import React from 'react';
import { TextArea, RecommendContainer } from './style';
import useTextAreaItem from './useTextAreaItem';

function TextAreaItem() {
  const {
    currentTabInfo,
    onChangeHandler,
    isShow,
    onKeyPress,
    recommend,
    clearAndCloseRecommend,
  } = useTextAreaItem();

  return (
    <>
      <TextArea value={currentTabInfo.latex} onChange={onChangeHandler} onKeyDown={onKeyPress} />
      {isShow && (
        <RecommendContainer>
          추천
          <ul>
            {recommend.map((item, index) => (
              <RecommendItem
                key={`${item.latex}${index}`}
                currentLatex={currentTabInfo.latex}
                clearAndCloseRecommend={clearAndCloseRecommend}
                latex={item.latex}
                image={item.image}
              />
            ))}
          </ul>
        </RecommendContainer>
      )}
    </>
  );
}

export default TextAreaItem;
