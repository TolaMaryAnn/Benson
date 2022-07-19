import React from "react";
import {  Link } from 'react-router-dom';
const  Navbar =()=> {
    return(
        < >
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#1D1D1D'}} >
            <div class="container-fluid  " >
            
            
            <div class="collapse navbar-collapse container" id="navbarNav"  style={{display:'flex',
            flexDirection:'row-reverse',
             backgroundColor:'#1D1D1D',
            
             }}>
            <ul class="navbar-nav" style={{justifyContent:'space-between'}} >
            <li class="nav-item" >
            <a class="nav-link"   ><Link to="/BrowseE" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50,textDecoration:'none'}}>
            Browse Events
            </Link>
            </a>
               
            </li>
           
            <li class="nav-item" >
            <a class="nav-link"   ><Link to="/Contact" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50,textDecoration:'none'}}>
             Contact
            </Link>
            </a>
               
            </li>
           
            <li class="nav-item" >
            <a class="nav-link"   ><Link to="/Donate" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50,textDecoration:'none'}}>
            Donate
            </Link>
            </a>
               
            </li>
            </ul>
            </div>
            </div>
            </nav>
           
           
        </>
    )
}

export default Navbar


