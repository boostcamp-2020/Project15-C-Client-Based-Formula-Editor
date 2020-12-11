import React from 'react';
import OutputFormulaBox from '@meal/OutputFormulaBox';
import { OUTPUT_ICON, OUTPUT_TEXT } from '@constants/constants';
import * as S from './style';

function MenuBarOutput() {
  return (
    <S.OutputWrapper>
      <S.LabelWrapper>
        <S.LabelIcon>{OUTPUT_ICON}</S.LabelIcon>
        <S.LabelText className="globalFont">{OUTPUT_TEXT}</S.LabelText>
      </S.LabelWrapper>
      <OutputFormulaBox
        isMenuBar={true}
        width={'100%'}
        backgroundColor={'white'}
        padding={'10px'}
        border={'none'}
      />
    </S.OutputWrapper>
  );
}

export default MenuBarOutput;
