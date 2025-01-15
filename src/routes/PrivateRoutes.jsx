import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "../Pages/shared/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate to={"/SignIn"} state={location.pathname}></Navigate>
};

PrivateRoutes.propTypes={
    children:PropTypes.object,
}
export default PrivateRoutes;