import useCurrentTab from '@hooks/useCurrentTab';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import html2canvas from 'html2canvas';
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';
import React, { useState } from 'react';

let timer: any;
export const useSaveButtons = () => {
  const { currentTabInfo } = useCurrentTab();
  const { mathfieldRef } = useSelector((state: RootState) => state.latex);
  const [message, setMessage] = useState(false);
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

  const onClickLoginHandler = () => {
    chrome.runtime.sendMessage({ message: 'login' }, (response) => {
      console.log(response);
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
    setMessage(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMessage(false);
    }, 2500);
  };
  return { downloadImage, downloadText, onClickLoginHandler, clipboardHandler, message };
};

export default useSaveButtons;
