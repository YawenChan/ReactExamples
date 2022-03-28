import './App.css';
import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom'; 
import {HashRouter,Route} from "react-router-dom"
import index from './pages/index.js';
function App() {
  return (
    <>
      <div className="indexWidth">
        <BrowserRouter>
          <HashRouter>
            <Routes>
              <Route exact={true} path="/pages/index.js" component={index} /> 
              
            </Routes>
          </HashRouter>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
