export interface RegisterApiResponse {
  profile: {
    id: string;
    name: string;
    slug: string;
    purpose: string;
    colour: string;
    avatar: string;
    createdAt: string;
  };
  user: {
    id: string;
    avatar: string;
    points: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    roleId: string | null;
    isActive: boolean;
    createdAt: string;
    time: string | null;
    profileId: string;
    level: number;
  };
}
