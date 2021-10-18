/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from '@firebase/auth';
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        console.log(user);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() =>
                setLoading(false)
            )
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unSubscribed;
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        loading
    }
}


export default useFirebase;
