import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState({});

    console.log(user);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const bookEvent = (eventId) => {
        setBookings(prev => ({ ...prev, [eventId]: true }));
    };
      

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        loading,
        setLoading,
        logOut,
        updateUser,
        bookEvent,
        bookings,
        setBookings,
        googleSignIn,
    }


    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;