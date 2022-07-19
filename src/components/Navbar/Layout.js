// const Nav =({label,  maintitle})=>{
//     return(
//         <>
//         <div>{label}</div>
//         <div>{ maintitle}</div>
//         </>
//     )

// }



// const Bigtext =({label, style})=>{
//     return(
//         <div style={style}>{label}</div>
//     )
// }



// export {
//      Nav,
//      Bigtext
//      } 

// import React from "react";
// import { Nav, NavLink, NavMenu }
// 	from "./NavbarElements";

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<NavMenu>
// 		<NavLink to="/browse" activeStyle>
// 			Browse Events
// 		</NavLink>
// 		<NavLink to="/contact" activeStyle>
// 			Contact us
// 		</NavLink>
// 		<NavLink to="/donate" activeStyle>
// 			Donate
// 		</NavLink>
		
// 		</NavMenu>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;

import { Fragment, useState, useEffect, createContext, useContext } from 'react';

// import classes from './Layout.module.css';
import NavbarElement from './NavbarElements';
// import Userdata from '../Components'
// import UserContextProvider from '../context/UserContext';



const Layout = (props) => {

 


  return (
   
    // <UserContextProvider>
      <Fragment>
         <NavbarElement/>
         {/* <main className={classes.main}>{props.children}</main> */}
    </Fragment>
    // </UserContextProvider>
 
   
  );
};

export default Layout;