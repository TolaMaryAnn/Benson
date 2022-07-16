import React from "react";

const  Navbar =()=> {
    return(
        <div >
            <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'black'}} >
            <div class="container-fluid  " >
            
            
            <div class="collapse navbar-collapse container" id="navbarNav"  style={{display:'flex',
            flexDirection:'row-reverse',
             backgroundColor:'black',
            
             }}>
            <ul class="navbar-nav" style={{justifyContent:'space-between'}} >
            <li class="nav-item" >
            <a class="nav-link "  href="#" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50}}>Browse Events</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50}}>Contact us </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white',font:'Montserrat',fontSize:20}}>Donate</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
           
           
        </div>
    )
}

export default Navbar