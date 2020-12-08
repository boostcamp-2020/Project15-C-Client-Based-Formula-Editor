import styled from '@emotion/styled';

export const FavoriteModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const FavoriteModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 6;
`;

export const FavoriteModalWrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 4px;
  width: 500px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 7;
`;

export const ModalTitle = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #bcbec0;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 20px 8px 20px;

  input {
    height: 29px;
    font-size: 15px;
    outline: none;
    border: 1px solid #bcbec0;
    border-radius: 5px;
  }
`;

export const ContentLabel = styled.div`
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
`;

export const LatexBox = styled.div`
  border: 1px solid #bcbec0;
  height: 30px;
  font-size: 15px;
  font-weight: normal;
  padding: 4px;
  border-radius: 5px;
`;

export const ModalButtons = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-end;
`;
