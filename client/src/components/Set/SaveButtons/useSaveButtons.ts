import useCurrentTab from '@hooks/useCurrentTab';
import { useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import html2canvas from 'html2canvas';
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';
import React, { useRef, useState } from 'react';
import { setToken, getToken } from '@utils/token';
import useToggle from '@hooks/useToggle';
import { BASE_URL } from '@lib/apis/common';

export const useSaveButtons = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { currentTabInfo } = useCurrentTab();
  const { mathfieldRef } = useSelector((state: RootState) => state.latex);
  const [message, onToggleMessage] = useToggle(false);
  const [imageUrl, setImageUrl] = useState('');

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

  const createQrcode = () => {
    if (!process.env.Client_ID) return;
    const clientId: string = process.env.Client_ID;

    if (mathfieldRef) {
      html2canvas(mathfieldRef).then((canvas) => {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const formData = new FormData();
          formData.append('image', blob);
          fetch('https://api.imgur.com/3/image', {
            method: 'post',
            headers: {
              Authorization: clientId,
              Accept: 'application/json',
            },
            body: formData,
          })
            .then((response) => response.json())
            .then((response) => {
              //여기서 백이랑 통신을 해서 서버사이드렌더링된 HTML페이지 URL를 받아와 여기에 넣는다.
              const imageUrl =
                BASE_URL.substring(0, BASE_URL.length - 3) + getUrlParse(response.data.link);
              setImageUrl(imageUrl);
            });
        });
      });
    }
  };

  const getUrlParse = (url: string) => {
    const startIndex = url.lastIndexOf('/') + 1;
    const endIndex = url.lastIndexOf('.');
    return url.substring(startIndex, endIndex);
  };

  const saveHandler = () => {
    const element: any = document.getElementById('iframe');
    const url = element.contentDocument.querySelector('canvas').toDataURL('image/png');
    const ankerElement = document.createElement('a');
    ankerElement.href = url;
    ankerElement.download = `QRCODE${Date.now()}.png`;
    ankerElement.click();
    setImageUrl('');
  };

  return {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    createQrcode,
    imageUrl,
    setImageUrl,
    saveHandler,
  };
};

export default useSaveButtons;
