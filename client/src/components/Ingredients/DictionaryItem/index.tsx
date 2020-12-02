import React from 'react';
import { StaticMathField } from 'boost-mathquill';
import { useSelector } from 'react-redux';
import { RootState } from '@/contexts';
import * as S from './style';

interface DictionaryItemProps {
  latex: string;
}

function DictionaryItem({ latex }: DictionaryItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);
  const onClick = () => {
    mathfield?.write(latex);
  };

  return (
    <S.DictionaryItem onClick={onClick}>
      <StaticMathField>{latex}</StaticMathField>
    </S.DictionaryItem>
  );
}

export default DictionaryItem;
