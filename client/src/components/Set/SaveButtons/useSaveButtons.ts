import useCurrentTab from '@hooks/useCurrentTab';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@contexts/index';
import html2canvas from 'html2canvas';
import * as clipboard from 'clipboard-polyfill';
import { ClipboardItem } from 'clipboard-polyfill';
import { useRef, useState } from 'react';
import { setToken } from '@utils/token';
import useToggle from '@hooks/useToggle';
import { BASE_URL } from '@lib/apis/common';
import useModal from '@hooks/useModal';
import { userLogin, userLogout } from '@contexts/user';
import axios from 'axios';
import { LoginMessage, MESSAGE_TIME } from '@constants/constants';
import { getFavoritesThunk } from '@contexts/user';

export const useSaveButtons = () => {
  const dispatch = useDispatch();
  const [message, onToggleMessage] = useToggle(false);
  const [loginMessage, setLoginMessage] = useState<LoginMessage | ''>('');
  const [imageUrl, setImageUrl] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { currentTabInfo } = useCurrentTab();
  const { mathfieldRef } = useSelector((state: RootState) => state.latex);
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { userId } = userInfo;

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
    }, MESSAGE_TIME);
  };

  const createQrcode = () => {
    if (!process.env.Client_ID) return;
    const clientId: string = process.env.Client_ID;

    if (mathfieldRef) {
      html2canvas(mathfieldRef).then((canvas) => {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const formData = new FormData();
          formData.append('image', blob);

          try {
            const response = await axios.post('https://api.imgur.com/3/image', formData, {
              headers: {
                Authorization: clientId,
                Accept: 'application/json',
              },
            });
            const { data } = response.data;
            const imageUrl = BASE_URL.substring(0, BASE_URL.length - 3) + getUrlParse(data.link);
            setImageUrl(imageUrl);
          } catch (error) {
            console.error(error);
          }
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

  const createHandler = () => {
    createQrcode();
    toggleModal();
  };

  const closeHandler = () => {
    setImageUrl('');
  };

  const [toggleModal, Modal] = useModal({ closeHandler, saveHandler, needButton: true });

  return {
    downloadImage,
    downloadText,
    clipboardHandler,
    message,
    loginMessage,
    imageUrl,
    createHandler,
    Modal,
    userId,
  };
};

export default useSaveButtons;
