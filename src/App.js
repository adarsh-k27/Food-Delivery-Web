import React, { useEffect } from "react";
import {Header} from './components/index'
import {AnimatePresence} from 'framer-motion'
import {Routes,Route} from 'react-router-dom'
import {MainContainer,CreateContainer} from './components'
import RouterWrapper from "./Router";
//clientId : 1058444032298-86q2075ef5r30o1f5mta4vralfad3rvi.apps.googleusercontent.com
//clientscecret : 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
function App() {
  
  return (
    <AnimatePresence >
        <div className = "w-screen h-auto flex flex-col " >
          < Header />
          <main className="mt-24 w-full p-4 px-12">
            <RouterWrapper />
          </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
