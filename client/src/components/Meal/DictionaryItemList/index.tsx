import React from 'react';
import DictionaryItem from '@ingredients/DictionaryItem';
import { MenuLatex } from '@constants/latex-dictionary';
import { Table } from 'semantic-ui-react';
import * as S from './style';

interface DictionaryItemListProps {
  searchWord: string;
  searchedContent: MenuLatex[];
  selectedContent: MenuLatex[];
}

function DictionaryItemList({
  searchWord,
  searchedContent,
  selectedContent,
}: DictionaryItemListProps) {
  return (
    <S.DictionaryItemList>
      <Table celled fixed unstackable selectable>
        <Table.Body>
          {searchWord
            ? searchedContent.map((dictionary: MenuLatex, index: number) => (
                <Table.Row key={index}>
                  <DictionaryItem latex={dictionary.latex} />
                </Table.Row>
              ))
            : selectedContent.map((dictionary: MenuLatex, index: number) => (
                <Table.Row key={index}>
                  <DictionaryItem latex={dictionary.latex} />
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </S.DictionaryItemList>
  );
}

export default DictionaryItemList;
