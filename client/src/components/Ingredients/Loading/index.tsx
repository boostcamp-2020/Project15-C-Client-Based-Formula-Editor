import React from 'react';
import * as S from './style';

export interface LoadingProps {
  size: 'mini' | 'big';
}

const Loading = ({ size }: LoadingProps) => {
  return (
    <S.LoadingContainer size={size}>
      <div className="pencil">
        <p>수식 셰프</p>
        <div className="top"></div>
      </div>
      <div className={size === 'mini' ? 'stroke_mini' : 'stroke_big'}></div>
    </S.LoadingContainer>
  );
};

export default Loading;
