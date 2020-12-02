import React from 'react';
import TableItem from '@ingredients/TableItem';
import { Tab } from 'semantic-ui-react';
import * as S from './style';

const data = [
  { id: 1, title: '첫번째 타이틀', latex: '\\int' },
  { id: 2, title: '두번째 타이틀', latex: '3+3' },
  { id: 3, title: '세번째 타이틀', latex: '3-3' },
  { id: 4, title: '네번째 타이틀', latex: '\\sqrt{3}' },
];

function FavoriteTab() {
  return (
    <Tab.Pane>
      <S.FavoriteContainer>
        <TableItem headerTitle={'Ttile'} headerLatex={'Latex'} data={data} />
      </S.FavoriteContainer>
    </Tab.Pane>
  );
}

export default FavoriteTab;
