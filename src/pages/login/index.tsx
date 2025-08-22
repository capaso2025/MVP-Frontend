import Login from "@/shared/ui/templates/auth/login";
import { useNavigate } from "@tanstack/react-router";

function LoginPage() {
  const navigate = useNavigate();
  return <Login onClickSignup={() => {
    navigate({
      to: '/signup'
    })
  }} />
};

export default LoginPage;