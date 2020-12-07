import useCurrentTab from '@hooks/useCurrentTab';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import html2canvas from 'html2canvas';
import { setToken } from '@utils/token';

export const useSaveButtons = () => {
  const { currentTabInfo } = useCurrentTab();
  const { mathfieldRef } = useSelector((state: RootState) => state.latex);

  const downloadText = () => {
    const fileName = `수식셰프${Date.now()}.txt`;
    const element = document.createElement('a');
    element.href = `data:text/plain; charset=utf-8,${currentTabInfo.latex}`;
    element.download = fileName;
    element.click();
  };

  const downloadImage = () => {
    if (mathfieldRef) {
      html2canvas(mathfieldRef).then((canvas) => {
        const url = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.href = url;
        element.download = `수식셰프${Date.now()}.png`;
        element.click();
      });
    }
  };

  const onClickLoginHandler = async () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      const { userToken, result } = response.results;
      setToken(userToken);

      // TODO. Redux에 current user 저장하는 로직
      // TODO. 여기서 말고, 즐겨찾기 탭에서, Redux에 current user가 있다면 즐겨찾기 목록 불러오는 로직
    });
  };

  return { downloadImage, downloadText, onClickLoginHandler };
};

export default useSaveButtons;
