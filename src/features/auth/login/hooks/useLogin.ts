import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../auth-store';
import { useRenderStore } from '@/shared/store/render-store';
import { toast } from 'react-toastify';
import { login } from '../loginHttpCall';
import { LoginData } from '../types/loginData.types';
import { ApiError } from '@/api/error';

export const useLogin = () => {
  const navigate = useNavigate();
  const loginStore = useAuthStore((state) => state.login);
  const logoutStore = useAuthStore((state) => state.logout);
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const closeModal = useRenderStore((state) => state.closeModal);
  const executeLogin = async (values: LoginData) => {
    try {
      toggleLoading();
      const response = await login({
        email: values.email,
        password: values.password,
      });
      navigate('/learn');
      closeModal();
      loginStore(response.token, response.user);
      localStorage.setItem('t', response.token);
      toast.success('Bienvenido de nuevo!');
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message);
      }
    } finally {
      toggleLoading();
    }
  };

  const executeLogout = async () => {
    logoutStore();
    localStorage.removeItem('t');
    navigate('/');
  };

  return {
    executeLogin,
    executeLogout,
  };
};
