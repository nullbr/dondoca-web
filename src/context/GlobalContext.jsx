import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Tranlations
  const { t } = useTranslation();

  // User Authentication
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Handle Page scroll for navbar
  const [scrollY, setScrollY] = useState(900);

  return (
    <GlobalContext.Provider
      value={{
        t,
        signUp,
        user,
        logIn,
        logOut,
        scrollY,
        setScrollY,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const Global = () => useContext(GlobalContext);
