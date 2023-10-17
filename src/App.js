import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import OurJobs from "./components/OurJobs";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Home from "./components/Home";
import Light from "./components/Light";
import Siguresat from "./components/Siguresat";
import Plani from "./components/Plani";
import LCards from "./components/LCards";
import SCards from "./components/SCards";
import PCards from "./components/PCards";




function App() {
  return (

 <BrowserRouter>
 <Header />
 <Routes>
  <Route path="/Aboutus" exact element={<Aboutus/>}/>
  <Route path="/OurJobs" element={<OurJobs/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/Main" element={<Main/>}/>
  <Route path="/Light" element={<Light/>} />
  <Route path="/Siguresat" element={<Siguresat/>}/>
  <Route path="/Plani" element={<Plani/>}/>
  <Route path="./LCards" element={<LCards/>}/>
  <Route path="./SCards" element={<SCards/>}/>
  <Route path="/PCards" element={<PCards/>}/>

 </Routes>
 
 <Footer/>
 </BrowserRouter>


    
  );
}

export default App;
