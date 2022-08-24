import React from "react";
import {Header} from './components/index'
import {AnimatePresence} from 'framer-motion'
import {Routes,Route} from 'react-router-dom'
import {MainContainer,CreateContainer} from './components'
import RouterWrapper from "./Router";
//clientId : 321413320078-8arkq70o1oh5pkvphhg00tgkd4finl4a.apps.googleusercontent.com
//clientscecret : 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
function App() {
  return (
    <AnimatePresence >
        <div className = "w-screen h-auto flex flex-col bg-primary" >
          < Header />
          <main className="mt-24 w-full p-4 px-12">
            <RouterWrapper />
          </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
