import GlobalContext from "./globalcontext";
import React,{useContext, useReducer} from 'react'
import { GlobalReducer } from "./reducer";
import { LOGINSUCCESS } from "../action";
const initialData={
    authentication:false,
    user:{},
    catogery:[],
    products:[],
    cart:[]
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
    const AllCatogery=(data)=>{
      dispatch({type:"GETCATOGERY",payload:data})
    }
    const AllProducts=(data)=>{
      dispatch({type:"ALLProducts",payload:data})
    }
    const LoadCart=(data)=>{
       dispatch({type:"LOAD_CART",payload:data})
    }
    const AddCart=(data)=>{
      dispatch({type:"ADD_CART",payload:data})
    }
  return (
    <GlobalContext.Provider value = {
      {
        state,
        UserLogin,
        userLogOut,
        AllCatogery,
        AllProducts,
        LoadCart,
        AddCart
      }
    } >
     {children}
    </GlobalContext.Provider>
  )
}



export default GlobalcontextProvider