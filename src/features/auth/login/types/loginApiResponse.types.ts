export interface LoginApiResponse {
  token: string;
  user: {
    email: string;
    roleId: string;
  };
}
