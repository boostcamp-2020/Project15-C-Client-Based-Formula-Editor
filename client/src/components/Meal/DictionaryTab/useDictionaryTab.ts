import { useEffect, useRef, useState } from 'react';
import { LATEX_DICTIONARY, MENU_TITLE } from '@constants/latex-dictionary';

const useDictionaryTab = () => {
  const [menuItem, setMenuItem] = useState(MENU_TITLE.polynomial);
  const [searchWord, setSearchWord] = useState('');
  const currentMenu = LATEX_DICTIONARY.filter((item) => item.menu === menuItem)[0];
  const [searchedContent, setSearchedContent] = useState<any[]>([]);
  let timer = useRef<any>();

  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMenuItem(e.target.value);
    setSearchWord('');
  };
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
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
    onSearchHandler,
    onSelectHandler,
    menuItem,
    searchWord,
    searchedContent,
  };
};

export default useDictionaryTab;
