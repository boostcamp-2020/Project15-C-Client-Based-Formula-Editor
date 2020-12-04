import { useEffect, useMemo, useRef, useState } from 'react';
import useInput from '@hooks/useInput';
import useSelect from '@hooks/useSelect';
import { LATEX_DICTIONARY, DICTIONARY_MENU_TITLE, MenuLatex } from '@constants/latex-dictionary';
import { DISPLAY_INTERVAL } from '@constants/constants';

const useDictionaryTab = () => {
  const [menuTitle, onChangeMenuTitle, setMenuTitle] = useSelect(DICTIONARY_MENU_TITLE.all);
  const [searchWord, onChangeSearchWord, clearWord] = useInput('');
  const [maxNumber, setMaxNumber] = useState(DISPLAY_INTERVAL);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const allMenu = useRef(
    LATEX_DICTIONARY.reduce<MenuLatex[]>(
      (total, dictionary) => total.concat(dictionary.content),
      []
    )
  );

  const currentMenuContent = useMemo(
    () =>
      menuTitle === DICTIONARY_MENU_TITLE.all
        ? allMenu.current.slice(0, maxNumber)
        : LATEX_DICTIONARY.filter((dictionary) => dictionary.menu === menuTitle)[0].content,
    [menuTitle, maxNumber]
  );

  const [searchedContent, setSearchedContent] = useState<MenuLatex[]>(currentMenuContent);

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeMenuTitle(event);
    if (maxNumber !== DISPLAY_INTERVAL) setMaxNumber(DISPLAY_INTERVAL);
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
    clearWord();
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setMenuTitle(DICTIONARY_MENU_TITLE.all);
      setMaxNumber(DISPLAY_INTERVAL);
    }
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
    onChangeSearchWord(event);
  };

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (!searchWord.length) {
      debounceTimer.current = null;
      return;
    }

    debounceTimer.current = setTimeout(() => {
      const searchContents = LATEX_DICTIONARY.reduce<MenuLatex[]>(
        (total, dictionary) =>
          total.concat(dictionary.content.filter((formula) => formula.title.includes(searchWord))),
        []
      );
      setSearchedContent(searchContents);
      debounceTimer.current = null;
    }, 500);
  }, [searchWord]);

  const throttleTimer = useRef<NodeJS.Timeout | null>(null);
  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!throttleTimer.current) {
      throttleTimer.current = setTimeout(() => {
        const target = e.target as HTMLDivElement;
        const scrollHeight = target.scrollHeight;
        const scrollTop = target.scrollTop;
        const clientHieght = target.clientHeight;

        if (scrollTop + clientHieght >= scrollHeight - 20 && maxNumber < allMenu.current.length) {
          setMaxNumber((number) => number + DISPLAY_INTERVAL);
        }
        throttleTimer.current = null;
      }, 300);
    }
  };

  return {
    containerRef,
    onScroll,
    currentMenuContent,
    menuTitle,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
  };
};

export default useDictionaryTab;