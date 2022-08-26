import React, {
  useContext,
  useEffect
} from "react";
import {
  Header
} from './components/index'
import {
  AnimatePresence
} from 'framer-motion'
import {
  Routes,
  Route
} from 'react-router-dom'
import {
  MainContainer,
  CreateContainer
} from './components'
import jwt from 'jwt-decode'
import RouterWrapper from "./Router";
import GlobalContext from "./context/globalcontext";
import {
  UserSignIn
} from "./collections/user";
//clientId : 1058444032298-86q2075ef5r30o1f5mta4vralfad3rvi.apps.googleusercontent.com
//clientscecret : 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
function App() {
  const {
    UserLogin,
    state
  } = useContext(GlobalContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('User'))
    if (state.authentication == true) {
      UserLogin(user)
    }
  }, [])

  useEffect(() => {
    if (window.google.accounts) {
      window.google?.accounts?.id.initialize({
        client_id: '134749209819-gsrbf6jdigucts70297t5990tnhuh3pu.apps.googleusercontent.com',
        callback: GoogleLoginSuccess
      })
      window.google.accounts.id.renderButton(
        document.getElementById('SignInDiv'), {
          theme: 'outline',
          size: 'small'
        }
      )
    }
  }, [window.google.accounts])
  console.log("nnn", window);

  const GoogleLoginSuccess = response => {
    const userObj = jwt(response.credential)
    //console.log(userObj);
    const {
      name,
      email,
      picture,
      email_verified
    } = userObj
    //console.log(name,email,picture,email_verified);
    UserSignIn({
      name,
      email,
      picture,
      email_verified
    }, UserLogin)
  }

  return ( 
     <AnimatePresence>
    <div className = "w-screen h-auto flex flex-col ">
    <Header/>
    <main className = "mt-20 w-full px-2 md:px-12" >
    <RouterWrapper/>
    </main> 
    </div> 
    </AnimatePresence>
  );
}

export default App;