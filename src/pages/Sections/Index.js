import React from "react"
import Body from "./Blocks/Body"
import Vision from "./Blocks/Vision"
import Session from "./Blocks/Session"
import Apporach from "./Blocks/Approach"
import Help from "./Blocks/Help"
import Borm from "./Blocks/Borm"
import Layout from "../../components/Navbar/Layout";
import { Outlet, Link } from "react-router-dom";
// import { UserContext } from "../../components/context/UserContext";


const  Index =()=> {
    return(
        <div>
        <Layout/> 
      <Borm/>
      
      <Body/>
      <Vision/>
      <Session/>
      <Apporach/>
      <Help/>
        </div>
    )
}
export default Index