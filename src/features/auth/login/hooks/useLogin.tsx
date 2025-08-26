import { useRenderStore } from '@/shared/store/render-store';
import { login } from '../login-http';
import { LoginData } from '../login-data';
import { useNavigate } from '@tanstack/react-router';
import ResponseModal from '@/shared/ui/templates/response-modal';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const navigate = useNavigate();
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const setModalData = useRenderStore((state) => state.setModalData);
  const closeModal = useRenderStore((state) => state.closeModal);
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


  return useMutation({
    mutationKey: ['login'],
    mutationFn: executeLogin,
  });
};
