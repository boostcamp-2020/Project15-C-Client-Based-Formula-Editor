import { useEffect, useRef, useState } from 'react';
import useInput from '@hooks/useInput';
import useSelect from '@hooks/useSelect';
import {
  LATEX_DICTIONARY,
  DICTIONARY_MENU_TITLE,
  MenuLatex,
  DictionaryMenu,
} from '@constants/latex-dictionary';

const useDictionaryTab = () => {
  const [menuTitle, onChangeMenuTitle] = useSelect(DICTIONARY_MENU_TITLE.polynomial);
  const [searchWord, onChangeSearchWord, clearWord] = useInput('');
  const [searchedContent, setSearchedContent] = useState<MenuLatex[]>([]);

  const currentMenu = LATEX_DICTIONARY.filter((dictionary) => dictionary.menu === menuTitle)[0];

  let timer = useRef<any>();

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeMenuTitle(event);
    clearWord();
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchWord(event);
  };

  useEffect(() => {
    if (!searchWord.length) return;

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const searchContents = LATEX_DICTIONARY.map((dictionary) =>
        dictionary.content.filter((formula) => formula.title.includes(searchWord))
      );
      const searchResults = searchContents.reduce(
        (contentList, content) => contentList.concat(content),
        []
      );
      setSearchedContent(searchResults);
      timer.current = null;
    }, 500);
  }, [searchWord]);

  return {
    currentMenu,
    menuTitle,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
  };
};

export default useDictionaryTab;
