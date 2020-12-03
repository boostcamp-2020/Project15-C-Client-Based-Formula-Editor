import React from 'react';
import { StaticMathField } from 'boost-mathquill';
import { useSelector } from 'react-redux';
import { RootState } from '@/contexts';
import { Table } from 'semantic-ui-react';
import * as S from './style';

interface DictionaryItemProps {
  latex: string;
}

function DictionaryItem({ latex }: DictionaryItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    mathfield?.write(latex);
  };

  return (
    // <S.DictionaryItem onClick={onClick}>
    //   {/* <StaticMathField>{latex}</StaticMathField> */}
    //   dsfdsafsfsdafsdfdssfdsdfasdfsdfasafdsfdadsfsadfasdfsdfsdafsfs
    // </S.DictionaryItem>
    <Table.Cell onClick={onClick}>
      <StaticMathField>{latex}</StaticMathField>
    </Table.Cell>
  );
}

export default DictionaryItem;
