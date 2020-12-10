import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { OutputFormulaProps } from '@meal/OutputFormula/index';
import useOutputFormulaBox from './useOutputFormulaBox';
import * as S from './style';

function OutputFormulaBox({ backgroundColor, toggleModal }: OutputFormulaProps) {
  const {
    initmathInput,
    currentTabInfo,
    onChangeHandler,
    mathfieldRef,
    onKeyDownHandler,
  } = useOutputFormulaBox();

  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;

  return (
    <S.OutputFormulaBox
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontColor={fontColor}
      textAlign={textAlign}
    >
      {userId && (
        <S.StarButtonBox>
          <Icon name={'star'} size="large" onClick={toggleModal} />
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
  );
}

export default OutputFormulaBox;
