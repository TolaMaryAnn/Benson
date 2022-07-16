import React from "react"
import help from "../Images/help.png"
const  Help =()=> {
    return(
        <div style={{backgroundColor:'white'}}>
            {/* web */}
                <div className="container uk-align-center uk-height-viewport uk-visible@m" style={{display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:50
                }}>
                   <div>
                   
                        <div className="uk-align-center" style={{marginTop:110,lineHeight:1.5}} >
                        <div style={{marginLeft:250}}>
                        
                        <div style={{font:'Montserrat',fontSize:100,fontWeight:700,color:'black',marginLeft:30}}>
                            Need help?
                        </div>

                        <div>
                        
                        <div style={{font:'Montserrat',fontSize:20,fontWeight:400,color:'black',lineHeight:6}}>
                        If you have questions we're here to chat. Just send us a message!
                        </div>
                        </div>
                                <div className="uk-button" style={{font:'Montserrat',
                                fontWeight:700,
                                fontSize:20,
                                backgroundColor:'#FCD441',
                                color:'black',width:400,
                                height:50,
                                marginLeft:80,
                                borderRadius:3
                                
                                
                                
                                }}>
                                Let's talk
                                </div>

                            </div>
                    </div>
                   </div>

                    <div style={{marginLeft:300,position:'absolute'}}>
                        <img src={help} style={{width:500,height:400,marginTop:50}}/>
                    </div>
                </div>

                {/* mobile */}
                <div className="container uk-align-center  uk-hidden@m uk-hidden@l" style={{display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                marginTop:50
                }}>
                   <div>
                   
                        <div className="uk-align-center" style={{marginTop:110,lineHeight:1.5}} >
                        <div >
                        
                        <div style={{font:'Montserrat',fontSize:50,fontWeight:700,color:'black',marginLeft:100}}>
                            Need help?
                        </div>

                        <div>
                        
                        <div style={{font:'Montserrat',fontSize:12,fontWeight:400,color:'black',lineHeight:4,marginLeft:50}}>
                        If you have questions we're here to chat. Just send us a message!
                        </div>
                        </div>
                                <div className="uk-button" style={{font:'Montserrat',
                                fontWeight:700,
                                fontSize:15,
                                backgroundColor:'#FCD441',
                                color:'black',width:200,
                                height:50,
                                marginLeft:100,
                                borderRadius:3
                                
                                
                                
                                }}>
                                Let's talk
                                </div>

                            </div>
                    </div>
                   </div>

                    <div style={{position:'absolute',marginLeft:60}}>
                        <img src={help} style={{width:320,height:250,marginTop:50}}/>
                    </div>
                </div>
        </div>
    )
}

export default Help