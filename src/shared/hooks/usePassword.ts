import { useState } from 'react';

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () =>
    setShowPassword((showPassword) => !showPassword);

  return {
    showPassword,
    togglePasswordVisibility,
  };
};
