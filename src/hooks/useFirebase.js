/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from '@firebase/auth';
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
         if(password.length <= 8){
             setError('Password must be at least 8 character')
            return ;
        }
        createUserWithEmailAndPassword(auth, email, password)
       
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        
    }
    const handleEmailChange = e => {
    setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
    setPassword(e.target.value);
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        console.log(user);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() =>
                setIsLoading(false)
            );
    }

     

    


    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        email,
        password,
        error
    }
}


export default useFirebase;
