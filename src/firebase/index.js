// import Firebase from './firebase';
import FirebaseContext from './context';
import { useContext } from 'react';
import React from "react";
// export default Firebase;
export const useStateValue = ()=>useContext(FirebaseContext);
export const AuthContext = React.createContext(null);
