/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, sendEmailVerification } from '@firebase/auth';
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length <= 8) {
      setError('Password must be at least 8 character')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
      })
      .catch(error => {
        setError(error.message);
      })
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {

        const user = result.user;

      })


    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }
  }
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }
  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
  const handleNameChange = e => {
    setName(e.target.value);
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

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
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
    error,
    handleNameChange,
    toggleLogin,
    handleResetPassword,
    name
  }
}


export default useFirebase;
