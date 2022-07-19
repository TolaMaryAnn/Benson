import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Nav, Bigtext} from "./components/Index";
// import Navbar from "./components/Navbar";
import Index from './pages/Sections/Index';



import { Route, Routes, Navigate, Link } from 'react-router-dom';
// import Layout from './components/Navbar/Layout';
import BrowseE from './pages/BrowseE';
import Contact from './pages/Contact';




const  App =()=> {
  return (
    // <Layout >
    <Routes>
    
      <Route path='/' element={<Index />} />
      <Route path='/BrowseE' element={<BrowseE/>} />
      <Route path='/Contact' element={<Contact/>} /> 
     

     

      {/* <Route path='/Footer' element={<Footer/>} /> */}
     
    </Routes>
  // </Layout> 
  );
}

export default App;
