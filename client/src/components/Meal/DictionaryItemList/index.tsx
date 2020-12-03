import React from 'react';
import DictionaryItem from '@ingredients/DictionaryItem';
import { MenuLatex } from '@constants/latex-dictionary';
import { Table } from 'semantic-ui-react';
import * as S from './style';

interface DictionaryItemListProps {
  displayedContent: MenuLatex[];
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  containerRef: any;
}

function DictionaryItemList({ displayedContent, onScroll, containerRef }: DictionaryItemListProps) {
  return (
    <S.DictionaryItemList ref={containerRef} onScroll={onScroll}>
      <Table celled fixed unstackable selectable>
        <Table.Body>
          {displayedContent.map((dictionary: MenuLatex, index: number) => (
            <Table.Row key={index}>
              <DictionaryItem latex={dictionary.latex} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <S.t>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </S.t> */}
    </S.DictionaryItemList>
  );
}

export default DictionaryItemList;
