import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL:"https://job-portal-server-liart-tau.vercel.app",
    withCredentials:true
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {signOutUser} = useAuth();
    useEffect(()=>{
        axiosInstance.interceptors.response.use((response)=>{
            return response
        }, error =>{
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(res =>{
                    navigate("/signIn")
                })
                .catch(err => console.log(err))
            }
            return Promise.reject(error)
        } )
    },[])
    return axiosInstance
};

export default useAxiosSecure;