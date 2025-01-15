
import Lottie from "lottie-react";
import lottieReactData from "../assets/Animation - 1735375700901.json";
import { useState } from "react";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import SocialLogin from "./shared/SocialLogin";
const Register = () => {
  const {createUser, updateUser} =useContext(AuthContext);
  const [error,setError] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const handleRegisterForm = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(name.length < 6 ){
          return setError({...error,name:"name must be 6 character or longer"});
        }
        if(!passwordRegex.test(password)){
          return setError({...error,invalid:"Password must be a number,uppercase and lowercase character"});
        }
        createUser(email,password)
        .then(() => {
          updateUser({displayName:name});
        })
        .catch(error => {
         alert(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={lottieReactData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0">
      <form onSubmit={handleRegisterForm} className="card-body">
      <h1 className="text-center text-2xl">Register Now !</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="User" className="input input-bordered" required />
          {
            error.name && <label className="text-red-500 text-sm"> {error.name} </label>
          }
        </div>
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
          {
            error.invalid && <label className="text-sm text-red-500"> {error.invalid} </label>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white">Register</button>
        </div>
      </form>
        <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Register;