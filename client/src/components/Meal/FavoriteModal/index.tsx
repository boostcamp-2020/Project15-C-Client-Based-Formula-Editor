import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import ButtonItem from '@ingredients/ButtonItem';
import useFavoriteModal from './useFavoriteModal';
import useCurrentTab from '@hooks/useCurrentTab';
import * as S from './style';

function FavoriteModal() {
  const { currentTabInfo } = useCurrentTab();
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { onClickModalClosed, onClickRegister } = useFavoriteModal();

  return (
    <>
      {isOpen && (
        <S.FavoriteModalContainer>
          <S.FavoriteModalOverlay onClick={onClickModalClosed} />
          <S.FavoriteModalWrapper>
            <S.ModalTitle>즐겨찾기 등록</S.ModalTitle>
            <S.ModalContent>
              <S.ContentLabel>Title</S.ContentLabel>
              <input type="text"></input>
              <S.ContentLabel>Latex</S.ContentLabel>
              <S.LatexBox>{currentTabInfo.latex}</S.LatexBox>
            </S.ModalContent>
            <S.ModalButtons>
              <ButtonItem title={'취소'} handler={onClickModalClosed} />
              <ButtonItem title={'등록'} handler={onClickRegister} />
            </S.ModalButtons>
          </S.FavoriteModalWrapper>
        </S.FavoriteModalContainer>
      )}
    </>
  );
}

export default FavoriteModal;