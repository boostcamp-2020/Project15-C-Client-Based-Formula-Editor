import React from 'react';
import { Header, Table, Button } from 'semantic-ui-react';
import * as S from './style';

interface DataType {
  id: number;
  title: string;
  latex: string;
}

interface TableItemType {
  headerTttle: string;
  headerLatex: string;
  title: string;
  latex: string;
  data: DataType[];
}

const removeHandler = (id: number) => {
  console.log(id, '제거하기');
};

function TableItem({ headerTttle, headerLatex, title, latex, data }: TableItemType) {
  const dataList = data.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell width={1}>
        <Header.Content>{item.title}</Header.Content>
      </Table.Cell>
      <Table.Cell width={3}>
        {item.latex}
        <Button circular color="teal" icon="remove circle" onClick={() => removeHandler(item.id)} />
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{headerTttle}</Table.HeaderCell>
          <Table.HeaderCell>{headerLatex}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{dataList}</Table.Body>
    </Table>
  );
}

export default TableItem;
