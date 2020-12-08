import React, { useEffect, useRef } from 'react';
import DictionaryMenuItem from '@ingredients/DictionaryMenuItem';
import { DICTIONARY_MENU_TITLE, MenuLatex } from '@constants/latex-dictionary';
import * as S from './style';

interface DictionaryHeaderProps {
  menuTitle: string;
  searchWord: string;
  displayedContent: MenuLatex[];
  onSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchWord: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DictionaryHeader({
  menuTitle,
  searchWord,
  onSelectHandler,
  onSearchHandler,
  displayedContent,
  onChangeSearchWord,
}: DictionaryHeaderProps) {
  const inputField = useRef<HTMLInputElement>(null);
  const suggestionWrapper = useRef<HTMLDivElement>(null);
  const exactMatch = true;
  const setSuggestionWrapperVisibility = () => {
    if (inputField.current !== document.activeElement)
      suggestionWrapper.current!.style.display = 'none';
    else suggestionWrapper.current!.style.display = 'initial';
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener('click', setSuggestionWrapperVisibility);
    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('click', setSuggestionWrapperVisibility);
    };
  }, []);
  let results = displayedContent.map((x: MenuLatex, i: number) => {
    const exactMatching: boolean =
      x.title.toLowerCase().indexOf(searchWord.toLowerCase()) === 0 && searchWord !== '';
    console.log('g:', exactMatch, '//title:', x.title);
    if (exactMatching) {
      return x.title;
    }
  });
  results = results.filter((result) => result !== undefined);
  console.log('z:', results);
  return (
    <S.DictionaryHeader>
      <S.DictionaryMenu onChange={onSelectHandler} value={menuTitle}>
        {Object.keys(DICTIONARY_MENU_TITLE).map((title, index) => (
          <DictionaryMenuItem title={DICTIONARY_MENU_TITLE[title]} key={index} />
        ))}
      </S.DictionaryMenu>
      <S.Temp>
        <S.DictionarySearch
          onChange={onSearchHandler}
          value={searchWord}
          placeholder="🔍검색어를 입력해주세요"
          ref={inputField}
        />
        <S.Temp2>
          <div ref={suggestionWrapper}> {results[0]}</div>
        </S.Temp2>
      </S.Temp>
    </S.DictionaryHeader>
  );
}

export default DictionaryHeader;
