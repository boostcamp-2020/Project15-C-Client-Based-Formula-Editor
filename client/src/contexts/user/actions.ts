import { createAction } from '@utils/util';
import { UserState } from './types';

export const USER_LOGIN = 'user/LOGIN';

export const userLogin = createAction<typeof USER_LOGIN, number>(USER_LOGIN);
