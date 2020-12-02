import React from 'react';
import * as S from './style';

function DictionaryMenuItem({ title }) {
  return <S.DictionaryMenuItem value={title}>{title}</S.DictionaryMenuItem>;
}

export default DictionaryMenuItem;
