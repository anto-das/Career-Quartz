import { useContext } from "react";
import { MdOutlineMailLock } from "react-icons/md";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then(() => {
            navigate(location?.state || "/")
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return (
        <div className="px-8 pb-8">
            <div className="divider">OR</div>
            <button onClick={handleSignInWithGoogle} className="btn w-full border-gray-200 bg-white text-gray-600"> <MdOutlineMailLock className="text-xl"/> Sign in with email</button>
        </div>
    );
};

export default SocialLogin;