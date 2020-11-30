import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { ContentsWrapper, ContentsBox } from '../../Set/Main/style';
import useContent from './useContent';

function Content() {
  const { initmathInput, nowLatexInfo, onChangeHandler, onClickHandler } = useContent();

  return (
    <ContentsWrapper onClick={onClickHandler}>
      <ContentsBox>
        <EditableMathField
          mathquillDidMount={initmathInput}
          latex={nowLatexInfo.latex}
          onChange={onChangeHandler}
        />
      </ContentsBox>
    </ContentsWrapper>
  );
}
export default Content;
