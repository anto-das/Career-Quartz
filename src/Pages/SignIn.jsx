import Lottie from "lottie-react";
import { useContext } from "react";

import loginLottieFile from "../assets/login.json"
import AuthContext from "../context/AuthContext";
import SocialLogin from "./shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignInForm = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(() => {
            navigate(location?.state || "/");
        })
        .catch(error => alert(error.message));
       
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={loginLottieFile}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 border shadow-xl">
        <form onSubmit={handleSignInForm} className="card-body">
      <h1 className="text-center text-2xl">Sign In Now !</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white ">Sign In</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default SignIn;