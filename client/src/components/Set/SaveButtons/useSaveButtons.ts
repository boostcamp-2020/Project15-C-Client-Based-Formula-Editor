import useCurrentTab from '@hooks/useCurrentTab';
import { useSelector } from 'react-redux';
import { RootState } from '@/contexts';
import html2canvas from 'html2canvas';

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

  return { downloadImage, downloadText };
};

export default useSaveButtons;