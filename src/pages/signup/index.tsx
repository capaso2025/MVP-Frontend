import Signup from "@/shared/ui/templates/auth/signup/Signup";
import { useNavigate } from '@tanstack/react-router';

function SignupPage() {
  const navigate = useNavigate();
  return <Signup onClickLogin={() => {
    navigate({
      to: '/login'
    })
  }} />
};

export default SignupPage;