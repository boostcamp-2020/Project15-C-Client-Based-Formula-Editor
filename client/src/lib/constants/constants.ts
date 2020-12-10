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
