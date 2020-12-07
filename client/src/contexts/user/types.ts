import { userLogin } from './actions';

export type UserAction =
  ReturnType<typeof userLogin>

export interface UserState {
  userId : number;
}
