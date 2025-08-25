import { IUser } from '../types/user.types';

export interface LoginApiResponse {
  token: string;
  user: IUser;
}
