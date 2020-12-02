import React from 'react';
import DictionaryItem from '@ingredients/DictionaryItem';
import * as S from './style';

function DictionaryItemList({ searchWord, searchedContent, currentMenu }) {
  return (
    <S.DictionaryItemList>
      {searchWord &&
        searchedContent.map((item, index) => <DictionaryItem key={index} latex={item.latex} />)}

      {!searchWord &&
        currentMenu.content.map((item, index) => <DictionaryItem key={index} latex={item.latex} />)}
    </S.DictionaryItemList>
  );
}

export default DictionaryItemList;
