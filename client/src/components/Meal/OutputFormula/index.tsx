import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import useContent from './useOutputFormula';
import * as S from './style';

function OutputFormula() {
  const {
    initmathInput,
    currentTabInfo,
    onChangeHandler,
    onClickHandler,
    mathfieldRef,
    onKeyDownHandler,
    onClickFavoriteHandler,
  } = useContent();
  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;

  return (
    <S.OutputFormulaWrapper onClick={onClickHandler}>
      <S.OutputFormulaBox fontSize={fontSize} fontColor={fontColor} textAlign={textAlign}>
        {userId && (
          <S.StarButtonBox>
            <Icon name={'star'} size="big" onClick={onClickFavoriteHandler} />
          </S.StarButtonBox>
        )}
        <S.OutputFormulaContent ref={mathfieldRef}>
          <EditableMathField
            mathquillDidMount={initmathInput}
            latex={latex}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
        </S.OutputFormulaContent>
      </S.OutputFormulaBox>
    </S.OutputFormulaWrapper>
  );
}

export default OutputFormula;
