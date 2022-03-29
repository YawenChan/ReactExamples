import './App.css';
import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom'; 
import {HashRouter,Route} from "react-router-dom"
// 頁面匯入
import Index from './pages/Index.js';
import Japan from './pages/Japan.js';
import Westen from './pages/Westen.js';
import Children from './pages/Children.js';
// 元件匯入
import Header from './components/Header';
import Footer from './components/footer';
import Menu from './components/Menu';


function App() {
  return (
    <>
          <Header/>
          <Menu/>
            <div className="bodyWidth">
                  <HashRouter>
                    <Routes>
                      <Route path="/" element={<Index/>}/> 
                      <Route path="/children" element={<Children/>}/>
                      <Route path="/japan" element={<Japan/>}/>
                      <Route path="/westen" element={<Westen/>}/>
                    </Routes>
                  </HashRouter>
            </div>
          <Footer/>
     
    </>
  );
}

export default App;
