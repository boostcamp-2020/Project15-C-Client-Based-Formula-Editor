import React from 'react';
import { Header, Table, Label } from 'semantic-ui-react';
import useTextAreaItem from './useTableItem';
import * as S from './style';
import { getFavorites } from '../../../lib/apis/favorite';

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

const removeHandler = async (id: number) => {
  console.log('지우기');
};

function TableItem({ headerTitle, headerLatex, data }: TableItemType) {
  const { onChangeHandler } = useTextAreaItem();
  const dataList = data.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell width={1}>
        <Header.Content>{item.title}</Header.Content>
      </Table.Cell>
      <Table.Cell width={4}>
        <S.TableContainer>
          <S.TableSpan onClick={() => onChangeHandler(item.latex)}>{item.latex}</S.TableSpan>
          <S.TableWrapper>
            <Label size="mini" color="teal" onClick={() => removeHandler(item.id)}>
              X
            </Label>
          </S.TableWrapper>
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
