import React from 'react';
import useOutputFormula from './useOutputFormula';
import * as S from './style';
import useModal from '@hooks/useModal';
import FavoriteModal from '@meal/FavoriteModal';
import OutputFormulaBox from '@meal/OutputFormulaBox/index';

export interface OutputFormulaProps {
  isMenuBar?: boolean;
  backgroundColor?: string;
  padding?: string;
  border?: string;
  width?: string;
  fontSize?: string;
  fontColor?: string;
  textAlign?: string;
  toggleModal?: () => void;
}

function OutputFormula({ padding, border }: OutputFormulaProps) {
  const { onClickHandler } = useOutputFormula();

  const [toggleModal, Modal] = useModal({});

  return (
    <>
      <S.OutputFormulaWrapper onClick={onClickHandler} border={border} padding={padding}>
        <OutputFormulaBox isMenuBar={false} toggleModal={toggleModal} />
      </S.OutputFormulaWrapper>
      <Modal width="big">
        <FavoriteModal onToggle={toggleModal} />
      </Modal>
    </>
  );
}

export default OutputFormula;
