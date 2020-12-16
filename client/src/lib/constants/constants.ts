export const INPUT_TEXT = '입력';
export const OUTPUT_TEXT = '출력';

export const TAB_LIMIT = 4;

export const FONT_SIZE_LISTS = [
  { size: '10', checked: false },
  { size: '15', checked: true },
  { size: '20', checked: false },
  { size: '25', checked: false },
  { size: '30', checked: false },
];

export const NEED_LOGIN_ICON = 'dont';

export const NO_LIST_ICON = 'warning';

export enum AlertMessage {
  NEED_LOGIN_MESSAGE = '로그인이 필요합니다.',
  NO_LIST_MESSAGE = '항목이 없습니다.',
}

export enum LoginMessage {
  LOGIN_SUCCESS = '로그인에 성공하였습니다.',
  LOGIN_FAUILRE = '로그인에 실패하였습니다.',
}
export const MESSAGE_TIME = 2500;
export const DISPLAY_INTERVAL = 6;

export const CLIPBOARD_MESSAGE = '클립보드에 복사가 완료되었습니다.';

export const DOWNLOAD_TEXTFILE_NAME = `수식셰프${Date.now()}.txt`;
export const DOWNLOAD_IMAGEFILE_NAME = `수식셰프${Date.now()}.png`;
export const DOWNLOAD_QRCODE_NAME = `QRCODE${Date.now()}.png`;
