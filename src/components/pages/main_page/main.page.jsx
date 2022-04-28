import React from "react";

import './main.style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "../../header/header.component";
import Home from "../../home/home.component"
import About from "../../about/about.component";
import Footer from "../../footer/footer.component";

function Page() {


  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default Page;
