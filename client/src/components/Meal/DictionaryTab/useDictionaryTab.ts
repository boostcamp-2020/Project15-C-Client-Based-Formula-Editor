import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useInput from '@hooks/useInput';
import useSelect from '@hooks/useSelect';
import { LATEX_DICTIONARY, DICTIONARY_MENU_TITLE, MenuLatex } from '@constants/latex-dictionary';
import { DISPLAY_INTERVAL } from '@constants/constants';
import useThrottle from '@hooks/useThrottle';

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

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const clientHieght = target.clientHeight;

    if (scrollTop + clientHieght >= scrollHeight - 80 && maxNumber < allMenu.current.length) {
      setMaxNumber((number) => number + DISPLAY_INTERVAL);
    }
  };

  const throttleOnScroll = useThrottle<[React.UIEvent<HTMLDivElement>]>(onScroll, 300);

  return {
    containerRef,
    onScroll: throttleOnScroll,
    currentMenuContent,
    menuTitle,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
  };
};

export default useDictionaryTab;
