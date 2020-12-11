import React from 'react';
import { LatexContent } from '@constants/latex-header';
import { getImageURL } from '@utils/util';
import { useDispatch } from 'react-redux';
import { editLatex } from '@contexts/latex';
import * as S from './style';
interface RecmmendItem extends LatexContent {
  currentLatex: string;
  clearAndCloseRecommend: () => void;
}

function RecommendItem({ latex, image, currentLatex, clearAndCloseRecommend }: RecmmendItem) {
  const dispatch = useDispatch();

  const onClick = () => {
    const lastIndex = currentLatex.lastIndexOf('@');
    const nextLatex = currentLatex.substring(0, lastIndex);
    dispatch(editLatex({ latex: nextLatex + latex }));
    clearAndCloseRecommend();
  };

  return (
    <S.RecommendWrapper onClick={onClick}>
      <S.RecommendLatexWrapper>
        <span>{latex}</span>
      </S.RecommendLatexWrapper>
      <S.RecommendImageWrapper>
        <img src={getImageURL(image)}></img>
      </S.RecommendImageWrapper>
    </S.RecommendWrapper>
  );
}

export default RecommendItem;
