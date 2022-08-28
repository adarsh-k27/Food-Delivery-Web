import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ChakraProvider
} from '@chakra-ui/react'
import App from './App';
import GlobalcontextProvider from './context/contextprovider'
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalcontextProvider>
    <ChakraProvider>
    < App />
    </ChakraProvider>
    </GlobalcontextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
