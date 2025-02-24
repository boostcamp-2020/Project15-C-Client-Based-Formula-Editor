import React from 'react';
import { Header, Table, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import useTextAreaItem from './useTableItem';
import { deleteFavorites } from '@contexts/user/actions';
import favoriteAPI from '@lib/apis/favorite';
import { FavoriteItem } from '@contexts/user/types';
import * as S from './style';

interface TableItemType {
  headerTitle: string;
  headerLatex: string;
  data: FavoriteItem[];
}

function TableItem({ headerTitle, headerLatex, data }: TableItemType) {
  const { onChangeHandler } = useTextAreaItem();
  const dispatch = useDispatch();

  const removeHandler = async (id?: number) => {
    if (id) {
      dispatch(deleteFavorites(id));
      await favoriteAPI.deleteFavorite(id);
    }
  };
  const dataList = data.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell width={1}>
        <Header.Content>{item.title}</Header.Content>
      </Table.Cell>
      <Table.Cell width={4}>
        <S.TableContainer>
          <S.TableSpan onClick={() => onChangeHandler(item.latex)}>{item.latex}</S.TableSpan>
          <S.TableWrapper>
            <Label size="mini" onClick={() => removeHandler(item.id)}>
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
