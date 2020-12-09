import React from 'react';
import DictionaryMenuItem from '@ingredients/DictionaryMenuItem';
import { DICTIONARY_MENU_TITLE } from '@constants/latex-dictionary';
import * as S from './style';

interface DictionaryHeaderProps {
  menuTitle: string;
  searchWord: string;
  onSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DictionaryHeader({
  menuTitle,
  searchWord,
  onSelectHandler,
  onSearchHandler,
}: DictionaryHeaderProps) {
  return (
    <S.DictionaryHeader>
      <S.DictionaryMenu onChange={onSelectHandler} value={menuTitle}>
        {Object.keys(DICTIONARY_MENU_TITLE).map((title, index) => (
          <DictionaryMenuItem title={DICTIONARY_MENU_TITLE[title]} key={index} />
        ))}
      </S.DictionaryMenu>

      <S.DictionarySearch
        onChange={onSearchHandler}
        value={searchWord}
        placeholder="🔍검색어를 입력해주세요"
      />
    </S.DictionaryHeader>
  );
}

export default DictionaryHeader;
