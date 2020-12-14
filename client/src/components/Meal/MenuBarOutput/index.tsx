import React from 'react';
import OutputFormulaBox from '@meal/OutputFormulaBox';
import { OUTPUT_TEXT } from '@constants/constants';
import { Icon } from 'semantic-ui-react';
import * as S from './style';

function MenuBarOutput() {
  return (
    <S.OutputWrapper>
      <S.LabelWrapper>
        <S.LabelIcon>
          <Icon name="file alternate outline" size="large" />
        </S.LabelIcon>
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
