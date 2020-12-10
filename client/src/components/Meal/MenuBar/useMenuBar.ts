import useSaveButtons from '@set/SaveButtons/useSaveButtons';

const useMenuBar = () => {
  const {
    message,
    Modal,
    imageUrl,
    downloadImage,
    downloadText,
    createHandler,
    clipboardHandler,
  } = useSaveButtons();
  const MenuBarSaveButtons = [
    { title: '이미지 저장', iconName: 'image', size: 'massive', onClickHandler: downloadImage },
    { title: '텍스트 저장', iconName: 'file text', size: 'massive', onClickHandler: downloadText },
    { title: 'QR코드 생성', iconName: 'qrcode', size: 'massive', onClickHandler: createHandler },
    { title: '화면 적용', iconName: 'tv', size: 'massive', onClickHandler: clipboardHandler },
  ];
  return { MenuBarSaveButtons, message, Modal, imageUrl };
};
export default useMenuBar;
