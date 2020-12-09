import React from 'react';
import DictionaryHeader from '../DictionaryHeader';
import DictionaryItemList from '../DictionaryItemList';
import useDictionaryTab from './useDictionaryTab';

import { Tab } from 'semantic-ui-react';
import * as S from './style';

function DictionaryTab() {
  const {
    onScroll,
    currentMenuContent,
    menuTitle,
    onSearchHandler,
    onSelectHandler,
    searchWord,
    searchedContent,
    containerRef,
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
          containerRef={containerRef}
          onScroll={onScroll}
          displayedContent={searchWord ? searchedContent : currentMenuContent}
        />
      </S.DictionaryContainer>
    </Tab.Pane>
  );
}

export default DictionaryTab;
