import React from 'react';
import DictionaryHeader from '../DictionaryHeader';
import DictionaryItemList from '../DictionaryItemList';
import useDictionaryTab from './useDictionaryTab';

import { Tab } from 'semantic-ui-react';
import * as S from './style';

function DictionaryTab() {
  const {
    currentMenu,
    menuTitle,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
  } = useDictionaryTab();

  return (
    <Tab.Pane>
      <S.DictionaryContainer>
        <DictionaryHeader
          menuTitle={menuTitle}
          searchWord={searchWord}
          onSelectHandler={onSelectHandler}
          onSearchHandler={onSearchHandler}
        />

        <DictionaryItemList
          searchWord={searchWord}
          searchedContent={searchedContent}
          selectedContent={currentMenu.content}
        />
      </S.DictionaryContainer>
    </Tab.Pane>
  );
}

export default DictionaryTab;
