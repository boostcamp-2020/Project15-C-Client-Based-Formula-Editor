import React from 'react';
import TextAreaItem from '@ingredients/TextAreaItem';
import FavoriteTab from '@meal/FavoriteTab';
import { Tab } from 'semantic-ui-react';
import DictionaryTab from '../DictionaryTab';
import * as S from './style';

const panes = [
  {
    menuItem: 'Tex',
    render: function tabContent() {
      return (
        <Tab.Pane>
          <TextAreaItem />
        </Tab.Pane>
      );
    },
  },
  {
    menuItem: '수식사전',
    // render: () => <DictionaryTab />,
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
      return <Tab.Pane>그리기 판</Tab.Pane>;
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
