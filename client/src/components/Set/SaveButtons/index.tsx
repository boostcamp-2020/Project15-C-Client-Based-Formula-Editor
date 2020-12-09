import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSaveButtons from './useSaveButtons';
import { Button, Message, Dimmer, Loader } from 'semantic-ui-react';
import * as S from './style';
import useModal from '@hooks/useModal';
import QRcode from 'qrcode.react';
import { RootState } from '@contexts/index';
import { userLogin, userLogout } from '@contexts/user';
import { setToken } from '@utils/token';

function SaveButtons() {
  const {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    imageUrl,
    Modal,
    createHandler,
  } = useSaveButtons();

  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;
  const dispatch = useDispatch();

  const onClickLoginHandler = async () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      const { userToken, userId } = response.results;
      setToken(userToken);
      dispatch(userLogin(userId));
    });
  };

  const onClickLogoutHandler = async () => {
    chrome.storage.sync.clear();
    dispatch(userLogout());
  };

  const [toggleModal, Modal] = useModal({ closeHandler, saveHandler });

  return (
    <S.SaveButtonsContainer>
      {userId ? (
        <S.Img src="image/logout.png" onClick={onClickLogoutHandler} />
      ) : (
        <S.Img src="image/login.png" onClick={onClickLoginHandler} />
      )}

      <Button.Group basic vertical>
        <Button content="이미지 저장" onClick={downloadImage} />
        <Button content="텍스트 저장" onClick={downloadText} />
        <Button content="QR코드 생성" onClick={createHandler} />
        <Button content="화면 적용" onClick={clipboardHandler} />
      </Button.Group>
      {message && (
        <S.MessageContainer>
          <Message positive>
            <Message.Header>클립보드에 복사가 완료되었습니다.</Message.Header>
            <p>
              원하는 위치(커서)에 <b>Ctrl + V</b> 해보세요!
            </p>
          </Message>
        </S.MessageContainer>
      )}
      <Modal>
        <QrCode imageUrl={imageUrl} />
      </Modal>
    </S.SaveButtonsContainer>
  );
}

export default SaveButtons;
