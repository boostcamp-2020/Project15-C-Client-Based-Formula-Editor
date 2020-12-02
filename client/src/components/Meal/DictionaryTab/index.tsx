import React from 'react';
import DictionaryHeader from '../DictionaryHeader';
import DictionaryItemList from '../DictionaryItemList';
import useDictionaryTab from './useDictionaryTab';

import { MENU_TITLE } from '@constants/latex-dictionary';
import { Tab } from 'semantic-ui-react';
import * as S from './style';

function DictionaryTab() {
  const {
    currentMenu,
    menuItem,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
  } = useDictionaryTab();

  return (
    <Tab.Pane>
      <S.DictionaryContainer>
        <DictionaryHeader
          MENU_TITLE={MENU_TITLE}
          menuItem={menuItem}
          searchWord={searchWord}
          onSelectHandler={onSelectHandler}
          onSearchHandler={onSearchHandler}
        />

        <DictionaryItemList
          searchWord={searchWord}
          searchedContent={searchedContent}
          currentMenu={currentMenu}
        />
      </S.DictionaryContainer>
    </Tab.Pane>
  );
}

export default DictionaryTab;
