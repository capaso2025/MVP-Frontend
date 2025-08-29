import { useRenderStore } from '@/shared/store/render-store';
import { login } from '../login-http';
import { LoginData } from '../login-data';
import ResponseModal from '@/shared/ui/templates/response-modal';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth-store';

export const useLogin = () => {
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const setModalData = useRenderStore((state) => state.setModalData);
  const closeModal = useRenderStore((state) => state.closeModal);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const executeLogin = async (values: LoginData): Promise<boolean> => {
    try {
      toggleLoading();
      const response = await login({
        email: values.email,
        password: values.password,
      });
      sessionStorage.removeItem('profile.name');
      sessionStorage.removeItem('user.firstName');
      sessionStorage.removeItem('user.id');
      setIsAuthenticated(true);
      localStorage.setItem('t', response.token);
      return true
    } catch (error) {
      setModalData({
        noCloseButton: true,
        children: <ResponseModal message='Error al iniciar sesión' type='error' onClick={closeModal} />
      })
      return false
    } finally {
      toggleLoading();
    }
  };


  return useMutation({
    mutationKey: ['login'],
    mutationFn: executeLogin,
  });
};
