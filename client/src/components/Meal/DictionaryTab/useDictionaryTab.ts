import { useEffect, useRef, useState } from 'react';
import useInput from '@hooks/useInput';
import useSelect from '@hooks/useSelect';
import { LATEX_DICTIONARY, DICTIONARY_MENU_TITLE } from '@constants/latex-dictionary';

const useDictionaryTab = () => {
  const [menuTitle, onChangeMenuTitle] = useSelect(DICTIONARY_MENU_TITLE.polynomial);
  const [searchWord, onChangeSearchWord, clearWord] = useInput('');
  const currentMenu = LATEX_DICTIONARY.filter((item) => item.menu === menuTitle)[0];
  const [searchedContent, setSearchedContent] = useState<any[]>([]);
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
      const searched = LATEX_DICTIONARY.map((menu) =>
        menu.content.filter((v) => v.title.includes(searchWord))
      );
      const flatSearched = searched.reduce((acc, v) => acc.concat(v), []);
      setSearchedContent(flatSearched);
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
