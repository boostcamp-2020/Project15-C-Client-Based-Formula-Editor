import React from 'react';
import { Header, Table, Button, Label } from 'semantic-ui-react';
import * as S from './style';

interface DataType {
  id: number;
  title: string;
  latex: string;
}

interface TableItemType {
  headerTitle: string;
  headerLatex: string;
  data: DataType[];
}

const removeHandler = (id: number) => {
  console.log(id, '제거하기');
};

function TableItem({ headerTitle, headerLatex, data }: TableItemType) {
  const dataList = data.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell width={1}>
        <Header.Content>{item.title}</Header.Content>
      </Table.Cell>
      <Table.Cell width={4}>
        <S.TableContainer>
          <span>{item.latex}</span>
          <Label size="mini" color="teal" onClick={() => removeHandler(item.id)}>
            X
          </Label>
        </S.TableContainer>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table basic="very" celled collapsing fixed unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{headerTitle}</Table.HeaderCell>
          <Table.HeaderCell>{headerLatex}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{dataList}</Table.Body>
    </Table>
  );
}

export default TableItem;
