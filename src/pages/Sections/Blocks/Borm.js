import React from "react";
import Benson2 from "../../../Images/Benson2.png";

import Polygon from "../../../Images/Polygon.png";
const  Borm =()=> {
    return(
        <div>
            <div className="container" style={{display:'flex',flexDirection:'column', alignItems:'center',marginTop:50,lineHeight:1}}>
                {/* web */}
                <div className="uk-visible@m" style={{fontWeight:700,fontSize:96,font:'Montserrat',color:'#FCD441'}}>
                    BORM
                </div>

                <div className="uk-visible@m" style={{font:'Montserrat',fontWeight:500,fontSize:20}}>
                Benson Ogbe Relationship Mentoring Academy
                </div>
                {/* mobile */}
                <div className="uk-hidden@m uk-hidden@l" style={{fontWeight:700,fontSize:64,font:'Montserrat',color:'#FCD441'}}>
                    BORM
                </div>

                <div className="uk-hidden@m uk-hidden@l" style={{font:'Montserrat',fontWeight:500,fontSize:15}}>
                Benson Ogbe Relationship Mentoring Academy
                </div>
            </div>
            {/* web */}
            <div class="uk-text-center container uk-visible@m" >
        <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0" >
            <img src={Benson2} width="777" height="588" alt="" style={{marginTop:27}}/>
            <div class="uk-position-center"  style={{backgroundColor:'#FCD441',width:90,height:90,marginTop:130}}>
                <span >
                    <img src={Polygon} style={{marginTop:20}} />
                </span>
            </div>
        </div>
       
    </div>
        </div>
    )
}
export default Borm