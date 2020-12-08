import useCurrentTab from '@hooks/useCurrentTab';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import html2canvas from 'html2canvas';
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';
import React, { useRef } from 'react';
import { setToken, getToken } from '@utils/token';
import useToggle from '@hooks/useToggle';

export const useSaveButtons = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { currentTabInfo } = useCurrentTab();
  const { mathfieldRef } = useSelector((state: RootState) => state.latex);
  const [message, onToggleMessage] = useToggle(false);
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
      const resultToken = getToken();
    });
  };

  const clipboardHandler = () => {
    messageHandler();
    if (mathfieldRef) {
      html2canvas(mathfieldRef).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          }
        });
      });
    }
  };

  const messageHandler = () => {
    onToggleMessage();
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onToggleMessage();
    }, 2500);
  };
  return { downloadImage, downloadText, onClickLoginHandler, clipboardHandler, message };
};

export default useSaveButtons;
