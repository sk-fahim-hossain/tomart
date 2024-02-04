import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProvider";
import SocialAuth from "../components/SocialAuth/SocialAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(Authcontext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.email) {
          const userInfo = {
            email: result.user.email,
            name: result.user.displayName,
          };
          axios.post("http://localhost:5000/users", userInfo).then((res) => {
            if (res.data)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });

            navigate(from, { replace: true });
          });
        }
      })
      .catch((error) => console.log(error.message));
    form.reset();
  };
  return (
    <div>
      <div className="bg-gray-100 mx-auto rounded-lg text-slate-800">
        <p className="text-left ml-3 text-sm py-2">
          {" "}
          <span className="text-cyan-700 text-xl">*</span>If you already have an
          account with us, please login at the{" "}
          <Link to="/login" className="text-sky-600">
            Login
          </Link>{" "}
          page.
        </p>
        <form onSubmit={handleSignUp} className="card-body pt-2 ">
          <p className="text-md text-left mt-4">Your Personal Details</p>
          <div className="divider bg-grey-300 h-1 rounded-sm m-0 bg-slate-800"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered text-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered text-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">
                Your Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered text-white"
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">
                Your Mobile Number
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Mobile Number"
              className="input input-bordered text-white"
            />
          </div> */}
          <p className="text-md text-left mt-4">Your Password</p>
          <div className="divider bg-grey-300 h-1 rounded-sm bg-slate-800 m-0"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered text-white"
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-800">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered text-white"
            />
          </div> */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
        {/* other authentication system */}
        <div className="divider divider-neutral ">OR</div>
        <SocialAuth></SocialAuth>
      </div>
    </div>
  );
};

export default SignUp;
