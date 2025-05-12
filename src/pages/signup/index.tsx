import Signup from "@/shared/ui/templates/Auth/Signup";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  return <Signup onClickLogin={() => {
    navigate("/login")
  }} />
};

export default SignupPage;