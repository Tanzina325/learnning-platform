import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import{createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const providerLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
 const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser,profile);
 }
const logOut = ()=>{
    return signOut(auth);
}

    
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
console.log('user state changed',currentUser);
setUser(currentUser)
});
return ()=>{
    unsubscribe();
}
},[])
    const authInfo = {user , providerLogin,createUser,signIn,updateUserProfile,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;