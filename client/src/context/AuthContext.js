// import { createContext, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user:{
//     _id:"660f9ab454c43e6356c1b02a",
//     username:"priyanshu",
//     email:"priyanshu@gmail.com",
//     profilePicture:"person/1.jpg",
//     coverPicture:"",
//     isAdmin:false,   
//     followers:[],
//     followings:[],
//   },
//   isFetching: false,
//   error: false,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    

//     return (
//       <AuthContext.Provider
//         value={{
//           user: state.user,
//           isFetching: state.isFetching,
//           error: state.error,
//           dispatch,
//         }}
//       >
//         {children}
//       </AuthContext.Provider>
//     );
//   };
  

import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user]) 

    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          isFetching: state.isFetching,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
      );
    };