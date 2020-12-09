import React from 'react';
import ButtonItem from '@ingredients/ButtonItem';
import useFavoriteModal from './useFavoriteModal';
import * as S from './style';

function FavoriteModal({ onToggle }: { onToggle: () => void }) {
  const {
    title,
    currentTabInfo,
    onChangeTitle,
    onClickModalClosed,
    onClickRegister,
  } = useFavoriteModal(onToggle);

  return (
    <>
      <S.ModalTitle>즐겨찾기 등록</S.ModalTitle>
      <S.ModalContent>
        <S.ContentLabel>Title</S.ContentLabel>
        <input type="text" onChange={onChangeTitle} value={title}></input>
        <S.ContentLabel>Latex</S.ContentLabel>
        <S.LatexBox>{currentTabInfo.latex}</S.LatexBox>
      </S.ModalContent>
      <S.ModalButtons>
        <ButtonItem title={'취소'} handler={onClickModalClosed} color={'red'} />
        <ButtonItem title={'등록'} color={'green'} handler={onClickRegister} />
      </S.ModalButtons>
    </>
  );
}

export default FavoriteModal;
