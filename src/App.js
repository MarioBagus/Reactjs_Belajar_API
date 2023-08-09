import './App.css';
import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popular from './Component/Popular'
import DetailAnime from './Component/DetailAnime';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
   <div className='App'>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Popular/>} />
          <Route path="/detailAnime/:id" element={<DetailAnime/>} />
       </Routes>
    </BrowserRouter>
    </div>
  
  );

}

export default App;
