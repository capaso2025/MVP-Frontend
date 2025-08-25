import { IProfile } from '@/features/auth/types/profile.types';
import { IUser } from '@/features/auth/types/user.types';

export interface OnboardingApiResponse {
  profile: IProfile;
  user: IUser;
}
