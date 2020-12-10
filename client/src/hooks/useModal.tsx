import React from 'react';
import useToggle from './useToggle';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactChild;
  width?: 'mini' | 'big';
}

interface ModalType {
  saveHandler?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>;
  closeHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  needButton?: boolean;
}

interface ModalStyleProps {
  width: 'mini' | 'big';
}

const Screen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(125, 125, 125, 0.7);
  z-index: 5;
`;

const ModalContainer = styled.div<ModalStyleProps>`
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: ${(props) => (props.width === 'mini' ? '15% ' : '40%')};
  min-width: 250px;
  max-width: 450px;
  min-height: 150px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  & .content_wrapper {
    width: 100%;
    margin-bottom: 1rem;
    & .screen_content {
      font-size: 1em;
    }
  }
  & button {
    width: 84px;
  }

  & button:first-of-type {
    margin-right: 10px !important;
  }

  & img {
    width: 50%;
  }
`;

const useModal = ({
  saveHandler,
  closeHandler,
  needButton = false,
}: ModalType): [() => void, ({ children }: Props) => JSX.Element] => {
  const [modalState, onToggModal] = useToggle(false);
  const onSaveHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    saveHandler && saveHandler(e);
    onToggModal();
  };

  const onCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    closeHandler && closeHandler(e);
    onToggModal();
  };

  function Modal({ children, width = 'mini' }: Props): JSX.Element {
    return (
      <>
        {modalState && (
          <>
            <ModalContainer width={width}>
              <div className="content_wrapper">{children}</div>
              {needButton && (
                <div className="button_wrapper">
                  <Button onClick={onSaveHandler} positive>
                    Save
                  </Button>
                  <Button onClick={onCloseHandler}>Cancel</Button>
                </div>
              )}
            </ModalContainer>
            <Screen onClick={onCloseHandler} />
          </>
        )}
      </>
    );
  }
  return [onToggModal, Modal];
};
export default useModal;
