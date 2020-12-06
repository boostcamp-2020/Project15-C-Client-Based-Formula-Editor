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
    element.setAttribute(
      'href',
      `data:text/plain; charset=utf-8,${encodeURIComponent(currentTabInfo.latex)}`
    );
    element.setAttribute('download', fileName);
    element.click();
  };

  const downloadImage = () => {
    if (mathfieldRef) {
      html2canvas(mathfieldRef).then((canvas) => {
        const uri = canvas.toDataURL('image/png');
        const element = document.createElement('a');
        element.download = `수식셰프${Date.now()}.png`;
        element.href = uri;
        element.click();
      });
    }
  };

  return { downloadImage, downloadText };
};

export default useSaveButtons;
