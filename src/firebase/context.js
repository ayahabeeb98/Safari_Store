import React, { useReducer, useContext } from "react";

const FirebaseContext = React.createContext();
export const initialState = {
  user: null,
};
const reducer = (state, action) => {
    console.log(state)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export const SateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FirebaseContext.Provider value={{ state, dispatch }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseContext;
