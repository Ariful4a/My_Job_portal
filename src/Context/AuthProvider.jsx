import { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // create user 
    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user  
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile  
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const userInfo = {
     user,
     setUser,
     setLoading,
     createUser,
     loading,
    signInUser,
    updateUserProfile
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;