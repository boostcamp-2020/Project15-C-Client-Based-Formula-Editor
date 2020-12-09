import React from 'react';
import useToggle from './useToggle';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

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

const ModalContainer = styled.div`
  z-index: 6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 20%;
  min-width: 250px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  & .content_wrapper {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
    & .screen_title {
      font-weight: bold;
      font-size: 1rem;
    }
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

interface Props {
  children?: React.ReactChild;
}

interface ModalType {
  title?: string;
  saveHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  closeHandler?: (e: React.MouseEvent<HTMLElement>) => void;
}

const useModal = ({
  title,
  saveHandler,
  closeHandler,
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

  function CheckScreen({ children }: Props): JSX.Element {
    return (
      <>
        {modalState && (
          <>
            <ModalContainer>
              <div className="content_wrapper">
                {title && <div className="screen_title">{title}</div>}
                {children}
              </div>
              <div className="button_wrapper">
                <Button onClick={onSaveHandler} positive>
                  Save
                </Button>
                <Button onClick={onCloseHandler}>Cancel</Button>
              </div>
            </ModalContainer>
            <Screen onClick={onCloseHandler} />
          </>
        )}
      </>
    );
  }
  return [onToggModal, CheckScreen];
};
export default useModal;
