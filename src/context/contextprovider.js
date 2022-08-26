import GlobalContext from "./globalcontext";
import React,{useContext, useReducer} from 'react'
import { GlobalReducer } from "./reducer";
import { LOGINSUCCESS } from "../action";
const initialData={
    authentication:false,
    user:{},
}


function GlobalcontextProvider({children}) {
    const [state,dispatch]=useReducer(GlobalReducer,initialData)
    const UserLogin=(data)=>{
      dispatch({
        type:"LOGINSUCCESS",
        payload:data
      })
    }
    const userLogOut=()=>{
      dispatch({type:"LOGOUT"})
    }
  return (
    <GlobalContext.Provider value = {
      {
        state,
        UserLogin,
        userLogOut
      }
    } >
     {children}
    </GlobalContext.Provider>
  )
}



export default GlobalcontextProvider