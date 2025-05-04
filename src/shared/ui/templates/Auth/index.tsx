import { useState } from 'react';
import Login from './Login';
import SelectSignUpRoad from './SelectSignUpRoad';
import Signup from './Signup';
import { AUTH_SCREENS, AuthScreen } from './auth-screens';

function Auth(props: { initialScreen: AuthScreen | undefined }) {
  const { initialScreen } = props;
  const [screen, setScreen] = useState<AuthScreen>(
    initialScreen || AUTH_SCREENS.SELECT_SIGNUP_ROAD,
  );
  return screen === AUTH_SCREENS.LOGIN ? (
    <Login onClickSignup={() => setScreen(AUTH_SCREENS.SELECT_SIGNUP_ROAD)} />
  ) : screen === AUTH_SCREENS.SELECT_SIGNUP_ROAD ? (
    <SelectSignUpRoad
      onClickLogin={() => setScreen(AUTH_SCREENS.LOGIN)}
      onClickMail={() => setScreen(AUTH_SCREENS.SIGNUP)}
    />
  ) : (
    <Signup onClickLogin={() => setScreen(AUTH_SCREENS.LOGIN)} />
  );
}

export default Auth;
