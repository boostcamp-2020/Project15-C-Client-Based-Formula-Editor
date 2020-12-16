import React from 'react';
import * as S from './style';

interface DictionaryMenuItemProps {
  title: string;
}

function DictionaryMenuItem({ title }: DictionaryMenuItemProps) {
  return <S.DictionaryMenuItem value={title}>{title}</S.DictionaryMenuItem>;
}

export default React.memo(DictionaryMenuItem);
