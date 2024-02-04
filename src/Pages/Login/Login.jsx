import React, { useContext } from "react";
import SocialAuth from "../components/SocialAuth/SocialAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(Authcontext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axios.post("http://localhost:5000/users", userInfo).then((res) => {
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate(from, { replace: true });
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };
  return (
    <div className="">
      <div className="w-2/5 mx-auto  mt-4 pb-4 bg-gray-100 rounded-lg">
        <form onSubmit={handleLogin} className="card-body">
          <p className="text-4xl text-left text-slate-900">Login</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-900">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-900">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="my-2 text-black text-sm">
            New to T-Mart ? Please{" "}
            <Link to="/signin" className="text-cyan-900 font-bold">
              Sign In
            </Link>
          </p>
        </form>
        {/* other authentication system */}
        <div className="divider mt-0 divider-neutral text-slate-900">OR</div>
        <SocialAuth></SocialAuth>
      </div>
    </div>
  );
};

export default Login;
