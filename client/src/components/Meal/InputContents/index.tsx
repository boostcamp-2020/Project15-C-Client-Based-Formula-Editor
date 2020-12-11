import React from 'react';
import { Tab } from 'semantic-ui-react';
import TextAreaItem from '@ingredients/TextAreaItem';
import FavoriteTab from '@meal/FavoriteTab';
import DictionaryTab from '@meal/DictionaryTab';
import CaculatorTab from '@meal/CalculatorTab';
import * as S from './style';

const panes = [
  {
    menuItem: 'Tex',
    render: function tabContent() {
      return (
        <Tab.Pane>
          <TextAreaItem size={'big'} />
        </Tab.Pane>
      );
    },
  },
  {
    menuItem: '수식사전',
    render: function tabContent() {
      return <DictionaryTab />;
    },
  },
  {
    menuItem: '즐겨찾기',
    render: function tabContent() {
      return <FavoriteTab />;
    },
  },
  {
    menuItem: '계산기',
    render: function tabContent() {
      return <CaculatorTab />;
    },
  },
];

function InputContents() {
  return (
    <S.ContentsContainer>
      <Tab panes={panes} />
    </S.ContentsContainer>
  );
}

export default InputContents;
