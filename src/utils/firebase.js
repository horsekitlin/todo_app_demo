import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from "react";

const {
  REACT_FIREBASE_API_KEY,
  REACT_FIREBASE_AUTH_DOMAIN,
  REACT_FIREBASE_PROJECT_ID,
  REACT_FIREBASE_STORE_BUCKET,
  REACT_FIREBASE_MESSAGE_SENDER_ID,
  REACT_FIREBASE_APP_ID,
  REACT_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_FIREBASE_API_KEY,
  authDomain: REACT_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_FIREBASE_PROJECT_ID,
  storageBucket: REACT_FIREBASE_STORE_BUCKET,
  messagingSenderId: REACT_FIREBASE_MESSAGE_SENDER_ID,
  appId: REACT_FIREBASE_APP_ID,
  measurementId: REACT_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
