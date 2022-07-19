
import React ,{Component} from "react"
import {  Link } from 'react-router-dom';
import group from "../../../Images/group.png"
import card from "../../../Images/card.png"
import women2 from "../../../Images/women2.png"
import heart from "../../../Images/heart.png"
import Ellipse from "../../../Images/Ellipse.png"
const  Browse =()=> {
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
            <a class="nav-link"   ><Link to="" style={{color:'white',font:'Montserrat',fontSize:20,marginRight:50,textDecoration:'none'}}>
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
           
           <div className="" style={{display:'flex',}}>
             <img src={group} />
           </div>
           
           <div className="container" style={{display:'flex',flexDirection:'column',marginTop:50}}>
            <div style={{font:'Montserrat',fontWeight:700,fontSize:40,color:'#4B4B4B'}}>
                BORM Events
            </div>

            

             {/* web */}
            <div className="uk-visible@m" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
                 <div className="uk-card uk-card-default " style={{backgroundColor:'white'}}> 
                    
                    
                    <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default " style={{backgroundColor:'#1D1D1D'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default " style={{backgroundColor:'white'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default" style={{backgroundColor:'#1D1D1D'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div> 
               
            </div>
           </div>

           {/* mobile */}
           <div style={{}}>
           <div className="uk-hidden@m uk-hidden@l  " style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginTop:50}}>
                 <div className="uk-card uk-card-default uk-card-body " style={{backgroundColor:'white'}}> 
                    
                    
                    <div class="uk-inline-clip uk-transition-toggle uk-light " tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor:'#1D1D1D'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor:'white'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div>

                <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor:'#1D1D1D'}}>
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
                    <img src={women2} style={{width:220,height:115}} />
                    <div class="uk-position-right"  style={{}}>
                    <span style={{marginRight:20}}>
                    {/* <img src={Ellipse} style={{marginTop:110,position:'absolute'}} />
                    <img src={heart} style={{marginTop:110}} /> */}
                    </span>
                    </div>
                    </div>





                    <div style={{marginTop:10}}>
                    <div className="container" >
                    <div style={{marginLeft:15,font:'Montserrat',fontWeight:500,fontSize:13}}>SINGLES AND MARRIED <br/> HANGOUT ABUJA 2022</div>
                    </div>
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Noto Sans',fontSize:11,fontWeight:500,color:'#FC4C41'}}>Sat, Jul 23, 9:00 AM + 6 more events</div>
                    </div>
                    
                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:400,color:"#7E7E7E"}}>Center For Women Development..</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:600,color:"#7E7E7E"}}>Free</div>
                    </div>

                    <div style={{marginTop:5}}>
                        <div style={{marginLeft:28,font:'Montserrat',fontSize:10,fontWeight:500,color:"#000000"}}>Benson Ogbe Relationship Mentoring <br/> Academy</div>
                    </div>
                    </div>
                </div> 
               
            </div>
           </div>
        </div>
    )
}

export default Browse