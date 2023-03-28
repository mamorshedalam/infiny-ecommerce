import React, { useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import '../firebase';

const AuthContext = React.createContext();

export function useAuth() {    // custom hooks for AuthContext
     return useContext(AuthContext);
}

export function AuthProvider({ children }) {
     const [loading, setLoading] = useState(true);
     const [currentUser, setCurrentUser] = useState();

     useEffect(() => {   // state change callback
          const auth = getAuth();
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               setCurrentUser(user);
               setLoading(false);
          });
          return unsubscribe;
     }, [])

     function login(email, password) {  // login
          const auth = getAuth();
          return signInWithEmailAndPassword(auth, email, password);
     }

     function logout() { // logout
          const auth = getAuth();
          return signOut(auth);
     }

     const value = { currentUser, login, logout }

     return (
          <AuthContext.Provider value={value}>
               {!loading && children}
          </AuthContext.Provider>
     )
}