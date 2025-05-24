export type AuthScreen = (typeof AUTH_SCREENS)[keyof typeof AUTH_SCREENS];

export const AUTH_SCREENS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  SELECT_SIGNUP_ROAD: 'select-signup-road',
};
