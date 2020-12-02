import React from 'react';
import DictionaryItem from '@ingredients/DictionaryItem';
import * as S from './style';

interface DictionaryItemListProps {
  searchWord: string;
  searchedContent: any;
  currentMenu: any;
}
function DictionaryItemList({ searchWord, searchedContent, currentMenu }: DictionaryItemListProps) {
  return (
    <S.DictionaryItemList>
      {searchWord &&
        searchedContent.map((item: any, index: any) => (
          <DictionaryItem key={index} latex={item.latex} />
        ))}

      {!searchWord &&
        currentMenu.content.map((item: any, index: any) => (
          <DictionaryItem key={index} latex={item.latex} />
        ))}
    </S.DictionaryItemList>
  );
}

export default DictionaryItemList;
