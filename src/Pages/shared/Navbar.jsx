import { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import brandLogo from "../../../public/icons8-jobs-64.png";
const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext);
  const handleSignOut = () =>{
    signOutUser()
  }
    const links = <>
    <NavLink to={"/"}>
      <button className="mr-2 hover:text-orange-500 hover:underline text-gray-600 text-[18px] font-md ">Home</button>
    </NavLink>
    <NavLink to={"/myApplication"}>
      <button className="mr-2 hover:text-orange-500 hover:underline text-gray-600 mt-2 lg:mt-0 text-[18px] font-md ">My-Application</button>
    </NavLink>
    <NavLink to={"/addJob"}>
      <button className="mr-2 hover:text-orange-500 hover:underline text-gray-600 mt-2 lg:mt-0 text-[18px] font-md ">Add-Jobs</button>
    </NavLink>
    <NavLink to={"/myPostedJobs"}>
      <button className="mr-2 hover:text-orange-500 hover:underline text-gray-600 mt-2 lg:mt-0 text-[18px] font-md ">My Posted Job</button>
    </NavLink>
    <NavLink to={"/register"}>
      <button className="block md:hidden lg:hidden text-gray-600 text-[18px] font-md  hover:text-blue-500 my-2 hover:underline">Sign Up</button>
    </NavLink>
    <NavLink to={"/SignIn"}>
      <button className="block md:hidden lg:hidden text-gray-600 text-[18px] font-md   hover:text-orange-500 hover:underline">Sign In</button>
    </NavLink>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 bg-[#ffffffad]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
    <img className="w-10 md:block lg:block hidden" src={brandLogo} alt="" />
    <h1 className="md:block lg:block hidden">CareerQuest</h1>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <button onClick={handleSignOut} className="btn bg-blue-500 text-white">Sign-Out</button>
      </> : <>
      <h1 className="md:hidden lg:hidden block btn btn-ghost text-xl flex items-center">
      <img className="w-10" src={brandLogo} alt="" />
        CareerQuest 
     
      </h1>
       <Link to={"/register"}>
       <button className="btn mr-1 bg-blue-500 text-white hidden md:block lg:block">Register</button>
       </Link>
    <Link to={"/SignIn"}>
      <button className="btn bg-yellow-400 hidden md:block lg:block"> Sign In </button>
    </Link>
      </>
    }
  </div>
</div>
    );
};

export default Navbar;