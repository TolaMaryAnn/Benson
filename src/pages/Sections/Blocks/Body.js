import React from "react"
import Benson1 from "../../../Images/Benson1.png";
import Benson from "../../../Images/Benson.png";
import Polygon from "../../../Images/Polygon.png";
import women from "../../../Images/women.png";
import Vector from "../../../Images/Vector.png";
import line from "../../../Images/line.png";
import hand from "../../../Images/hand.png";
const  Body =()=> {
    return(
        
        <div className="uk-height-viewport " style={{backgroundColor:'#1D1D1D'}}>
            {/* web */}
            <div class="uk-text-center container uk-visible@m" >
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
            <img src={Benson1} width="777" height="588" alt="" />
            
        </div>
       
    </div> 
        {/* mobile */}
   
       <div class="uk-text-center container  uk-hidden@m uk-hidden@l" >
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
            <img src={Benson} width="777" height="588" alt="" style={{marginTop:35}}/>
            <div class="uk-position-center" style={{backgroundColor:'#FCD441',width:50,height:50,marginTop:15}}>
                <span  >
                    <img src={Polygon} style={{marginTop:10,width:25}} />
                </span>
            </div>
        </div>
       
       </div>   

{/* web */}
<div className="container  uk-visible@m" style={{display:'flex',flexDirection:'row'}}>
                <div class="uk-text-center@s uk-text-break uk-text-nowrap" style={{fontSize:70,
                    position:'absolute',
                    font:'Montserrat',
                    fontWeight:900,
                    color:'white',
                    lineHeight:1,
                    marginTop:330
                    }}>
                Building <br/>
                healthy <br/>
            relationships <br/>
            and marriages
                </div>

                <div className="uk-align-center " style={{marginRight:65}}>
                    <img className="uk-align-center" src={women} style={{width:582,height:629,marginTop:100}} />
                </div>

                <div  style={{display:'flex', flexDirection:'column',lineHeight:0.1,marginTop:20}}>
                    <div className="uk-text-truncat " style={{flexDirection:'column',marginTop:400,color:'white',fontSize:32,fontWeight:700,font:'Montserrat'}}>
                        Our events <img src={Vector} />
                       <div>
                        <img src={line} style={{width:222}} /> 
                       </div>
                    </div>
                   
                </div>
            </div>

            {/* mobile */}
            <div className="container uk-hidden@m uk-hidden@l" >
               <div style={{marginLeft:55}}>
               <div class="uk-text-center uk-text-break uk-text-nowrap " style={{fontSize:40,
                    position:'absolute',
                    font:'Montserrat',
                    fontWeight:900,
                    color:'white',
                    lineHeight:1,
                    marginTop:50,
                    
                    }}>
                Building <br/>
                healthy <br/>
            relationships <br/>
            and marriages
                </div>
               <div style={{marginLeft:70}}>
               <div  style={{display:'flex',position:'absolute',marginTop:278,lineHeight:0.7,flexDirection:'column'}}>
                    <div className="uk-text-truncat " style={{color:'white',font:'Montserrat',fontWeight:700,fontSize:24}}>
                        Our events
                       <div>
                        <img src={line} style={{width:161,height:3}} />
                       </div>
                    </div>
                  
                </div>
               </div>
               </div>

                <div className="uk-align-center ">
                    <img className="uk-align-center" src={women} style={{width:372,height:406,marginTop:100}} />
                </div>

               
            </div>


            {/* mobile */}
            <div className=" container uk-hidden@m uk-hidden@l " style={{display:'flex',flexDirection:'row',justifyContent:'center'}} >
               <div style={{marginLeft:30}}>
               <div className="uk-align-center uk-text-center uk-text-break " style={{position:'absolute',
               font:'Montserrat',
               fontSize:15,
               fontWeight:600,
               color:'white',
             marginTop:110,
               lineHeight:2
               }}>
                Our Vission is  <span  style={{backgroundColor:'#FCD441',
                color:'black',
                fontWeight:600,
                paddingLeft:5,
                paddingRight:5
                }}> SIMPLE</span>   To prepare singles and <br/>
                equip the married to build strong relationships and <br/>
                healthy marriages, that are good and <br/>
                Godly models for all generations.
                </div>
               </div>

                <div className="uk-align-center">
                    <img src={hand} style={{width:300,height:300}}/>
                </div>
            </div> 
        </div>
         
        
    )
}

export default Body