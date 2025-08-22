import { toast } from 'react-toastify';
import { SignupData } from '../signupData.types';
import { signup } from '../signupHttpCall';
import { format } from 'date-fns';
import { ApiError } from '@/api/error';
import { useRenderStore } from '@/shared/store/render-store';
import { useNavigate } from '@tanstack/react-router';

export const useSignup = () => {
  const navigate = useNavigate();
  const toggleLoading = useRenderStore((state) => state.toggleLoading);
  const executeSignup = async (values: SignupData) => {
    try {
      toggleLoading();
      await signup({
        email: values.email,
        password: values.password,
        name: values.name,
        lastName: values.lastName,
        birthdate: format(values.birthdate, 'yyyy-MM-dd'),
        confirmPassword: values.confirmPassword,
      });
      navigate({
        to: '/login',
      });
      toast.success('Registro exitoso! Ahora puedes iniciar sesión.');
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(error.message);
      }
    } finally {
      toggleLoading();
    }
  };

  return { executeSignup };
};
