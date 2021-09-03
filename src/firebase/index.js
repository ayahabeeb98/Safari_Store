// import Firebase from './firebase';
import FirebaseContext from './context';
import { useContext } from 'react';

// export default Firebase;
export const useStateValue = ()=>useContext(FirebaseContext);
