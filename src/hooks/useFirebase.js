/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from '@firebase/auth';
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
// import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        // setLoading(true);
        console.log(user);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
        // .finally(() =>
        //     setLoading(false)
        // )
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

        });

    }, [])
    const logOut = () => {
        // setLoading(true);
        signOut(auth)
            .then(() => { })
        setUser({})
        // .finally(() => setLoading(false));
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        // loading
    }
}


export default useFirebase;
