import React from 'react';
import { EditableMathField } from 'boost-mathquill';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import useOutputFormula from './useOutputFormula';
import * as S from './style';
import useModal from '@hooks/useModal';
import FavoriteModal from '@meal/FavoriteModal';
export interface OutputFormulaProps {
  backgroundColor?: string;
  padding?: string;
  border?: string;
}

function OutputFormula({ backgroundColor, padding, border }: OutputFormulaProps) {
  const {
    initmathInput,
    currentTabInfo,
    onChangeHandler,
    onClickHandler,
    mathfieldRef,
    onKeyDownHandler,
  } = useOutputFormula();
  const { latex, fontSize, fontColor, textAlign } = currentTabInfo;
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const [toggleModal, Modal] = useModal({});

  return (
    <>
      <S.OutputFormulaWrapper onClick={onClickHandler} border={border} padding={padding}>
        <S.OutputFormulaBox
          backgroundColor={backgroundColor}
          fontSize={fontSize}
          fontColor={fontColor}
          textAlign={textAlign}
        >
          {userId && (
            <S.StarButtonBox>
              <Icon name={'star'} size="big" onClick={toggleModal} />
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
      <Modal width="big">
        <FavoriteModal onToggle={toggleModal} />
      </Modal>
    </>
  );
}

export default OutputFormula;
