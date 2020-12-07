import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@contexts/index';
import TableItem from '@ingredients/TableItem';
import { Tab } from 'semantic-ui-react';
import * as S from './style';
import AlertItem from '@ingredients/AlertItem';
import { DataType } from '../../Ingredients/TableItem';
import { NEED_LOGIN_ICON, NO_LIST_ICON, AlertMessage } from '@constants/constants';

//const data: DataType[] = [];
const data: DataType[] = [
  { id: 1, title: '첫번째 타이틀', latex: '\\int_3^3' },
  { id: 2, title: '두번째 타이틀', latex: '3+3' },
  { id: 3, title: '세번째 타이틀', latex: '3-3' },
  { id: 4, title: '네번째 타이틀', latex: '\\sqrt{3}' },
];

function FavoriteTab() {
  const { data, loading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <Tab.Pane>
      <S.FavoriteContainer>
        {data.length > 0 ? (
          <TableItem headerTitle={'Title'} headerLatex={'Latex'} data={data} />
        ) : (
          <AlertItem icon={NO_LIST_ICON} message={AlertMessage.NO_LIST_MESSAGE} />
        )}
      </S.FavoriteContainer>
    </Tab.Pane>
  );
}

export default FavoriteTab;
