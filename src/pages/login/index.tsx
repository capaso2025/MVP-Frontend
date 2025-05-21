import Login from "@/shared/ui/templates/auth/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return <Login onClickSignup={() => {
    navigate("/signup")
  }} />
};

export default LoginPage;