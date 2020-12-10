import React from 'react';
import useOutputFormula from './useOutputFormula';
import * as S from './style';
import useModal from '@hooks/useModal';
import FavoriteModal from '@meal/FavoriteModal';
import OutputFormulaBox from '@meal/OutputFormulaBox/index';

export interface OutputFormulaProps {
  backgroundColor?: string;
  padding?: string;
  border?: string;
  toggleModal?: () => void;
}

function OutputFormula({ backgroundColor, padding, border }: OutputFormulaProps) {
  const { onClickHandler } = useOutputFormula();

  const [toggleModal, Modal] = useModal({});

  return (
    <>
      <S.OutputFormulaWrapper onClick={onClickHandler} border={border} padding={padding}>
        <OutputFormulaBox backgroundColor={backgroundColor} toggleModal={toggleModal} />
      </S.OutputFormulaWrapper>
      <Modal width="big">
        <FavoriteModal onToggle={toggleModal} />
      </Modal>
    </>
  );
}

export default OutputFormula;
