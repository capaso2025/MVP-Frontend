export interface IUser {
  id: string;
  avatar: string;
  points: number;
  email: string | null;
  firstName: string;
  lastName: string | null;
  age: number;
  isActive: boolean;
  createdAt: string;
  profileId: string;
  level: number;
}
