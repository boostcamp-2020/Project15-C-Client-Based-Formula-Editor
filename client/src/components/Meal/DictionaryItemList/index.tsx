import React from 'react';
import DictionaryItem from '@ingredients/DictionaryItem';
import { MenuLatex } from '@constants/latex-dictionary';
import * as S from './style';

interface DictionaryItemListProps {
  searchWord: string;
  searchedContent: MenuLatex[];
  selectedContent: MenuLatex[];
}

function DictionaryItemList({
  searchWord,
  searchedContent,
  selectedContent,
}: DictionaryItemListProps) {
  return (
    <S.DictionaryItemList>
      {searchWord &&
        searchedContent.map((dictionary: MenuLatex, index: number) => (
          <DictionaryItem key={index} latex={dictionary.latex} />
        ))}
      {!searchWord &&
        selectedContent.map((dictionary: MenuLatex, index: number) => (
          <DictionaryItem key={index} latex={dictionary.latex} />
        ))}
    </S.DictionaryItemList>
  );
}

export default DictionaryItemList;
