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
        {/* <S.DictionaryHeader>
          <S.DictionaryMenu onChange={onSelectHandler} value={menuItem}>
            {Object.keys(MENU_TITLE).map((key, index) => (
              <S.DictionaryMenuItem key={index} value={MENU_TITLE[key]}>
                {MENU_TITLE[key]}
              </S.DictionaryMenuItem>
            ))}
          </S.DictionaryMenu>

          <S.DictionarySearch onChange={onSearchHandler} value={searchWord} />
        </S.DictionaryHeader> */}
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
        {/* <S.DictionaryItemList>
          {searchWord &&
            searchedContent.map((item, index) => (
              <S.DictionaryItem key={index} onClick={() => mathfield?.write(item.latex)}>
                <StaticMathField>{item.latex}</StaticMathField>
              </S.DictionaryItem>
            ))}

          {!searchWord &&
            currentMenu.content.map((item, index) => (
              <S.DictionaryItem key={index} onClick={() => mathfield?.write(item.latex)}>
                <StaticMathField>{item.latex}</StaticMathField>
              </S.DictionaryItem>
            ))}
        </S.DictionaryItemList> */}
      </S.DictionaryContainer>
    </Tab.Pane>
  );
}

export default DictionaryTab;
