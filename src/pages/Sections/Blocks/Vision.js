
import React from "react";
import hand from "../../../Images/hand.png";

const  Vision =()=> {
    return(
        <div className="" style={{backgroundColor:'#1D1D1D'}}>
            {/* web */}
            <div className="container uk-visible@m " style={{display:'flex',flexDirection:'column'}} >
               <div style={{marginLeft:80}}>
               <div className="uk-align-center uk-text-center uk-text-break " style={{position:'absolute',
               font:'Montserrat',
               fontSize:40,
               fontWeight:600,
               color:'white',
               marginTop:180,
               lineHeight:1.2
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
                    <img src={hand} style={{width:400,height:500}}/>
                </div>
            </div>

        
        </div>
    )
}

export default Vision
    