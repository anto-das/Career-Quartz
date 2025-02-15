import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import auth from '../Firebase/firebase.config';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth,provider);
    }
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser = (updateInfo) =>{
        updateProfile(auth.currentUser, updateInfo);
    }
    
    const signOutUser = async () => {
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
                const user = {email: currentUser.email};
          axios.post("https://job-portal-server-liart-tau.vercel.app/jwt",user,{withCredentials:true})
          .then(res =>{
            console.log(res.data)
          })
            }
            else{
                axios.post("https://job-portal-server-liart-tau.vercel.app/logout",{},{withCredentials:true})
                .then(res =>{
                    console.log(res.data)
                })
            }
            setLoading(false);
        })
        return () => unSubscribe();
    },[])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signInWithGoogle,
        createUser,
        updateUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes={
children:PropTypes.object,
}

export default AuthProvider;