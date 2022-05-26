import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  doctor: JSON.parse(localStorage.getItem("doctor")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  // storing current logged in user in the local storage
  useEffect(() => {
    localStorage.setItem("doctor", JSON.stringify(state.doctor));
  }, [state.doctor]);

  return (
    <Context.Provider
      value={{
        doctor: state.doctor,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
