import { SignupData } from '../signup-data';
import { signup } from '../signupHttpCall';
import { useRenderStore } from '@/shared/store/render-store';
import { useNavigate } from '@tanstack/react-router';
import { getParsedUserFromStorage } from '@/shared/lib/utils';
import ResponseModal from '@/shared/ui/templates/response-modal';

export const useSignup = () => {
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
        getParsedUserFromStorage()?.id || '',
      );
      navigate({
        to: '/login',
      });
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
      console.log('🏝️ ~ executeSignup ~ error:', error);
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

  return { executeSignup };
};
