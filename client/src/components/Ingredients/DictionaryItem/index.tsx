import React from 'react';
import { StaticMathField } from 'boost-mathquill';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { Table } from 'semantic-ui-react';

interface DictionaryItemProps {
  latex: string;
}

function DictionaryItem({ latex }: DictionaryItemProps) {
  const { mathfield } = useSelector((state: RootState) => state.latex);

  const onClick = () => {
    mathfield?.write(latex);
  };

  return (
    <Table.Cell onClick={onClick}>
      <StaticMathField>{latex}</StaticMathField>
    </Table.Cell>
  );
}

export default DictionaryItem;
