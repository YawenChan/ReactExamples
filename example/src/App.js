import './App.css';
import './css/index.css'
import './css/header.css'
import React from "react";
import { Router,BrowserRouter,HashRouter, Routes,Route,Link } from 'react-router-dom'; 
// 頁面匯入
import Index from './pages/Index.js';
import Japan from './pages/Japan.js';
import Westen from './pages/Westen.js';
import Children from './pages/Children.js';
// 元件匯入
import Header from './components/Header';
import Footer from './components/footer';


function App() {
  // 說明
  // 所有要使用到連結的頁面都要包含在HashRouter裡面才會吃到連結，
  // 不然使用Link標籤時會出現Blank page。
  // Footer和Header建議寫在div外才能維持在上下固定。
  return (
    <>
          <HashRouter key="2">
            <Header/> 
              <div className="bodyWidth">
              <Routes>
                <Route path="/" element={<Index/>}/> 
                <Route path="/children" element={<Children/>}/>
                <Route path="/japan" element={<Japan/>}/>
                <Route path="/westen" element={<Westen/>}/>
              </Routes>
                </div>
              <Footer/>
          </HashRouter>
     
    </>
  );
}

export default App;
