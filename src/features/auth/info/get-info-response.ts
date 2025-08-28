import { IProfile } from '../types/profile.types';
import { IUser } from '../types/user.types';

export interface GetInfoApiResponse extends IUser {
  profile: IProfile;
}
