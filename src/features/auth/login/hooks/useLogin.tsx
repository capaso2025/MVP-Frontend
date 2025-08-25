import { useAuthStore } from '../../auth-store';
import { useRenderStore } from '@/shared/store/render-store';
import { login } from '../login-http';
import { LoginData } from '../login-data';
import { useNavigate } from '@tanstack/react-router';
import ResponseModal from '@/shared/ui/templates/response-modal';

export const useLogin = () => {
  const navigate = useNavigate();
  const logoutStore = useAuthStore((state) => state.logout);
  const setUser = useAuthStore((state) => state.setUser);
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const setModalData = useRenderStore((state) => state.setModalData);
  const closeModal = useRenderStore((state) => state.closeModal);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const executeLogin = async (values: LoginData) => {
    try {
      toggleLoading();
      const response = await login({
        email: values.email,
        password: values.password,
      });
      navigate({
        to: '/home',
      });
      setUser(response.user);
      setIsAuthenticated(true);
      localStorage.setItem('t', response.token);
    } catch (error) {
      setModalData({
        noCloseButton: true,
        children: <ResponseModal message='Error al iniciar sesión' type='error' onClick={closeModal} />
      })
    } finally {
      toggleLoading();
    }
  };

  const executeLogout = async () => {
    logoutStore();
    localStorage.removeItem('t');
    navigate({
      to: '/home',
    });
  };

  return {
    executeLogin,
    executeLogout,
  };
};
