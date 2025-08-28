import { useGetInfo } from "@/features/auth/info/hooks/use-get-info";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { useRenderStore } from "../store/render-store";
import { useLogin } from "@/features/auth/login/hooks/useLogin";
import { Typography } from "../ui";
import SignupForm from "../ui/templates/auth/signup/signup-form";

export const useValidationLogin = () => {
  const { isFetching } = useGetInfo()
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const setModalData = useRenderStore(state => state.setModalData);
  const closeModal = useRenderStore(state => state.closeModal);
  const { mutate: login } = useLogin();

  const loginValidator = (callback: () => void) => {
    if (!isFetching && !isAuthenticated) {
      return setModalData({
        containerClassName: "bg-white",
        children: <div className=''>
          <Typography variant='h5' className='text-primary font-semibold pb-4 pl-4 pt-4'>Registra tus datos para continuar</Typography>
          <SignupForm theme='default' noTitle successAction={async (email, password) => {
            await login({ email, password }, {
              onSuccess: () => {
                closeModal();
                window.location.reload();
              }
            });

          }} />
        </div>
      })
    }
    callback();
  }
  return { loginValidator }
}