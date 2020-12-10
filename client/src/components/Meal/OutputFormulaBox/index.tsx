import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import { OutputFormulaProps } from '@meal/OutputFormula/index';
import useOutputFormulaBox from './useOutputFormulaBox';
import * as S from './style';
import useToggle from '@hooks/useToggle';

function OutputFormulaBox({ isMenuBar, width, backgroundColor, toggleModal }: OutputFormulaProps) {
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
  const [star, , setToggleStar] = useToggle(false);
  const onMouseHandler = () => {
    console.log('True');
    setToggleStar(true);
  };
  const onMouseLeaveHandler = () => {
    console.log('False');
    setToggleStar(false);
  };
  return (
    <S.OutputFormulaBox
      width={width}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontColor={fontColor}
      textAlign={textAlign}
    >
      <S.OutputFormulaContent ref={mathfieldRef}>
        <EditableMathField
          mathquillDidMount={initmathInput}
          latex={latex}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </S.OutputFormulaContent>
      {userId && !isMenuBar && (
        <S.StarButtonBox onMouseMove={onMouseHandler} onMouseLeave={onMouseLeaveHandler}>
          {star ? (
            <Icon name={'star'} size="large" onClick={toggleModal} />
          ) : (
            <Icon name={'star outline'} size="large" onClick={toggleModal} />
          )}
        </S.StarButtonBox>
      )}
    </S.OutputFormulaBox>
  );
}

export default OutputFormulaBox;
