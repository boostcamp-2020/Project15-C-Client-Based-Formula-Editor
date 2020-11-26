import React from 'react';
import * as S from './style';
import { Tab } from 'semantic-ui-react';
import TextAreaItem from '../../Ingredients/TextAreaItem';

const panes = [
  {
    menuItem: 'Tex',
    render: function tabContent() {
      return (
        <Tab.Pane>
          <TextAreaItem></TextAreaItem>
        </Tab.Pane>
      );
    },
  },
  {
    menuItem: '그리기',
    render: function tabContent() {
      return <Tab.Pane>그리기 판</Tab.Pane>;
    },
  },
  {
    menuItem: '수식사전',
    render: function tabContent() {
      return <Tab.Pane>수식찾기 리스트</Tab.Pane>;
    },
  },
  {
    menuItem: '즐겨찾기',
    render: function tabContent() {
      return <Tab.Pane>즐겨찾기 리스트</Tab.Pane>;
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
