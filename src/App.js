import React from "react";
import {Header} from './components/index'
import {AnimatePresence} from 'framer-motion'
function App() {
  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col">
      <Header />
    </div>
    </AnimatePresence>
  );
}

export default App;
