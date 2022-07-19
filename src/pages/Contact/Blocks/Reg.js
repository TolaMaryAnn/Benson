import React from "react";
import {  Link } from 'react-router-dom';
import group from "../../../Images/group.png"
const  Reg =()=> {
    return(
        <div>
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
            <a class="nav-link"   ><Link to="" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50,textDecoration:'none'}}>
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
             {/* web */}
            <div className="uk-visible@m" style={{backgroundColor:'#FCD441',display:'flex',flexDirection:'column'}}>
                
                    <div className="uk-align-center" style={{backgroundColor:'White',width:850,height:400,display:"flex",flexDirection:"column", marginTop:50}}>
                        <div style={{display:'flex',flexDirectio:'row',justifyContent:'space-between',backgroundColor:'#1D1D1D'}}>
                            <div>
                                <img src={group} style={{width:559,height:329}} />
                            </div>

                            <div style={{backgroundColor:'#1D1D1D'}}>
                                <div style={{marginTop:30}}>
                                <div style={{marginRight:100,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FFFFFF'}}>Sat, Jul 23, 9:00 AM </div>
                                </div>

                                <div style={{marginTop:15}}>
                                <div style={{marginRight:100,font:'Noto Sans',fontSize:15,fontWeight:500,color:'#FFFFFF'}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022 </div>
                                </div>

                                <div style={{marginTop:35}}>
                                <div style={{marginRight:90,font:'Montserrat',fontSize:10,fontWeight:500,color:'#FCD441'}}><span style={{color:'#E4E4E4'}}>By</span> Benson Ogbe Relationship Mentoring <br/> Academy</div>
                                </div>

                                <div className="uk-align-center">
                                <div className="uk-button" style={{font:'Montserrat',
                                fontWeight:700,
                                fontSize:13,
                                backgroundColor:'#FCD441',
                                color:'black',width:250,
                                height:40,
                                borderRadius:5,
                                padding:5,
                                marginTop:28
                                
                                
                                
                                }}>
                                Register now
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            two
                        </div>
                    </div>
                
                    
            </div>

            {/* mobile */}
            <div className="uk-hidden@m uk-hidden@" style={{backgroundColor:'#FCD441',display:'flex',flexDirection:'column'}}>
                
                <div className=" uk-align-center" style={{backgroundColor:'white',width:400,height:250,display:"flex",flexDirection:"column", marginTop:50}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',backgroundColor:'#1D1D1D'}}>
                        <div>
                            <img src={group} style={{width:400,height:200}} />
                        </div>

                        <div style={{backgroundColor:'#1D1D1D'}}>
                            <div style={{marginTop:30}}>
                            <div style={{marginLeft:100,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FFFFFF'}}>Sat, Jul 23, 9:00 AM </div>
                            </div>

                            <div style={{marginTop:15}}>
                            <div style={{marginLeft:100,font:'Noto Sans',fontSize:15,fontWeight:500,color:'#FFFFFF'}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022 </div>
                            </div>

                            <div style={{marginTop:35}}>
                            <div style={{marginLeft:100,font:'Montserrat',fontSize:10,fontWeight:500,color:'#FCD441'}}><span style={{color:'#E4E4E4'}}>By</span> Benson Ogbe Relationship Mentoring <br/> Academy</div>
                            </div>

                           <div style={{marginLeft:70}}>
                           <div className="uk-align-center">
                            <div className="uk-button" style={{font:'Montserrat',
                            fontWeight:700,
                            fontSize:13,
                            backgroundColor:'#FCD441',
                            color:'black',width:250,
                            height:40,
                            borderRadius:5,
                            padding:5,
                            marginTop:28
                            
                            
                            
                            }}>
                            Register now
                            </div>
                        </div>
                           </div>
                        </div>
                    </div>
                    <div>
                        two
                    </div>
                </div>
            
                
        </div>

           
        </div>
    )
}

export default Reg