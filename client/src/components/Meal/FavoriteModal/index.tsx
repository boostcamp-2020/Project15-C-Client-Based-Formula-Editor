import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import ButtonItem from '@ingredients/ButtonItem';
import useFavoriteModal from './useFavoriteModal';
import useCurrentTab from '@hooks/useCurrentTab';
import * as S from './style';
import useInput from '@hooks/useInput';

function FavoriteModal() {
  const { currentTabInfo } = useCurrentTab();
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const [title, onChangeTitle, clearTitle] = useInput('');
  const { onClickModalClosed, onClickRegister } = useFavoriteModal();

  return (
    <>
      <S.FavoriteModalContainer>
        <S.FavoriteModalOverlay onClick={onClickModalClosed} />
        <S.FavoriteModalWrapper>
          <S.ModalTitle>즐겨찾기 등록</S.ModalTitle>
          <S.ModalContent>
            <S.ContentLabel>Title</S.ContentLabel>
            <input type="text" onChange={onChangeTitle} value={title}></input>
            <S.ContentLabel>Latex</S.ContentLabel>
            <S.LatexBox>{currentTabInfo.latex}</S.LatexBox>
          </S.ModalContent>
          <S.ModalButtons>
            <ButtonItem title={'취소'} handler={onClickModalClosed} color={'red'} />
            <ButtonItem
              title={'등록'}
              color={'green'}
              handler={() => {
                onClickRegister({ userId, title, latex: currentTabInfo.latex }, clearTitle);
              }}
            />
          </S.ModalButtons>
        </S.FavoriteModalWrapper>
      </S.FavoriteModalContainer>
    </>
  );
}

export default FavoriteModal;
