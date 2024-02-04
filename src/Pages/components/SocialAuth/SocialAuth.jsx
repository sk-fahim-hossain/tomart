import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from "../../../Providers/AuthProvider";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const { googleSignIn } = useContext(Authcontext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axios.post("http://localhost:5000/users", userInfo).then((res) => {
          console.log(res.data);
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex items-center justify-evenly pb-4 text-slate-900">
      <div onClick={handleGoogleSignIn} className="cursor-pointer">
        <FcGoogle className="text-4xl mx-auto" />
        <p>Google</p>
      </div>
    </div>
  );
};

export default SocialAuth;
