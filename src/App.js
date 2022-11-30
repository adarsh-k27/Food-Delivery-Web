import React, {
  useContext,
  useEffect
} from "react";
import {
  AnimatePresence
} from 'framer-motion'
import {
  Routes,
  Route
} from 'react-router-dom'
import {
  MainContainer,
  CreateContainer,
  CreateCatogery,
  Footer
} from './components'
import jwt from 'jwt-decode'
import GlobalContext from "./context/globalcontext";
import {
  UserSignIn
} from "./collections/user";
import NavBarHead from "./navbarnew";
import MainComponent from "./components/MainComponent";
//clientId : 1058444032298-86q2075ef5r30o1f5mta4vralfad3rvi.apps.googleusercontent.com
//clientscecret : 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
function App() {
  
  const {
    UserLogin,
    state
  } = useContext(GlobalContext)
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem('User'))
    console.log("parsed",user);
    if (user && user.email ) {
      UserLogin(user)
    }
  }, [])

  // useEffect(() => {
  //   if (window.google.accounts) {
  //     window.google?.accounts?.id.initialize({
  //       client_id: '134749209819-gsrbf6jdigucts70297t5990tnhuh3pu.apps.googleusercontent.com',
  //       callback: GoogleLoginSuccess
  //     })
  //     window.google.accounts.id.renderButton(
  //       document.getElementById('SignInDiv'), {
  //         theme: 'outline',
  //         size: 'small'
  //       }
  //     )
  //   }
  // }, [window.google.accounts])

  const GoogleLoginSuccess = response => {
    const userObj = jwt(response.credential)
    //console.log("datass",userObj);
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
    {/* <Header/> */}
    <NavBarHead />
    <main className = "mt-20 w-full sm:px-2 md:px-12" >
      <Routes>
        <Route path="/add" element={<CreateContainer/>} ></Route>
        <Route path="/add-catogery" element={<CreateCatogery/>} ></Route>
        <Route path="/" element={<MainContainer/>}></Route>
      </Routes>
    </main>
    < Footer />
    </div> 
    </AnimatePresence>
  );
}

export default App;