import { SignupData } from '../signup-data';
import { signup } from '../signupHttpCall';
import { useRenderStore } from '@/shared/store/render-store';
import { useNavigate } from '@tanstack/react-router';
import ResponseModal from '@/shared/ui/templates/response-modal';
import { useMutation } from '@tanstack/react-query';
import { getFromSessionStorage } from '@/shared/lib/utils';

export const useSignup = (params?: {
  successAction?: ((email: string, password: string) => void) | undefined
}) => {
  const { successAction } = params || {};
  const navigate = useNavigate();
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const setModalData = useRenderStore((state) => state.setModalData);
  const closeModal = useRenderStore((state) => state.closeModal);

  const executeSignup = async (values: SignupData) => {
    try {
      toggleLoading();
      await signup(
        {
          email: values.email,
          password: values.password,
          lastName: values.lastName,
          confirmPassword: values.confirmPassword,
        },
        getFromSessionStorage('user.id')
      );
      if (successAction) return successAction(values.email, values.password)
      navigate({
        to: '/login',
      });
      sessionStorage.removeItem('user.id');
      sessionStorage.removeItem('profile.name');
      sessionStorage.removeItem('user.firstName');
      setModalData({
        noCloseButton: true,
        children: <ResponseModal
          onClick={() => {
            closeModal();
          }}
          message='Registro exitoso! Ahora puedes iniciar sesión.'
          type='success' />,
      });
    } catch (error) {
      setModalData({
        noCloseButton: true,
        children: <ResponseModal onClick={() => {
          closeModal();
        }} message='Error en el registro. Por favor, inténtalo de nuevo.'
          type='error' />,
      });
    } finally {
      toggleLoading();
    }
  };

  return useMutation({
    mutationKey: ['signup'],
    mutationFn: executeSignup,
  });
};
