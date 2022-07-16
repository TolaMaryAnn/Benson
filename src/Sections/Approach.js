import React from "react";
import closed from "../Images/closed.png"
import Vector from "../Images/Vector.png"
import line from "../Images/line.png"
const  Approach =()=> {
    return(
        <div style={{backgroundColor:'black'}}>
            {/* web */}
            <div className="container uk-align-center uk-height-viewport uk-visible@m" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div >
                        <div style={{marginLeft:100}}>
                        <div className=" uk-text-center uk-text-break" style={{position:'absolute',
                        font:'Montserrat',
                        fontWeight:900,fontSize:70,
                        lineHeight:1,color:'white',
                        marginTop:300,
                        
                        }}>
                            Our <br/>
                            Approach
                        </div>
                        </div>
                        <div  style={{marginTop:150}}>
                        <img src={closed} style={{marginLeft:250,backgroundColor:'black'}} />
                        </div>
                        
                    </div>

                   <div style={{marginRight:50}}>
                   <div style={{display:'flex',flexDirection:'column',marginTop:180}}>
                        {/* 1st */}
                        <div style={{flexDirection:'row',display:'flex'}}>
                            <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:32,fontWeight:700,color:'white'}}>Practical <img src={Vector} /></div>
                                <img src={line} style={{width:222,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:18,fontWeight:500,color:'white',marginTop:8}}>providing practical solutions and methods that are <br/>
                                easily applicable in every relationship</div>
                            </div>

                           
                        </div>

                        {/* 2nd */}
                        <div style={{flexDirection:'row',display:'flex',marginTop:40}}>
                        <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:32,fontWeight:700,color:'white'}}>Spirit Led <img src={Vector} /></div>
                                <img src={line} style={{width:222,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:18,fontWeight:500,color:'white',marginTop:8}}>are in tune to the leading and direction of the <br/>
                                Holy Spirit</div>
                            </div>

                           
                        </div>

                        {/* 3rd */}
                        <div style={{flexDirection:'row',display:'flex',marginTop:40}}>
                        <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:32,fontWeight:700,color:'white'}}>Bibilical <img src={Vector} /></div>
                                <img src={line} style={{width:222,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:18,fontWeight:500,color:'white',marginTop:8}}>The word of God is the foundation of all our teachings <br/>
                                and counselling.</div>
                            </div>

                            
                        </div>
                    </div>
                   </div>
            </div>

            {/* mobile */}
            <div className=" uk-align-center uk-hidden@m uk-hidden@l uk-height-viewport" style={{display:'flex',flexDirection:'column'}}>
                    <div >
                        <div style={{marginLeft:100}}>
                        <div className=" uk-text-center uk-text-break" style={{position:'absolute',
                        font:'Montserrat',
                        fontWeight:900,fontSize:40,
                        lineHeight:1,color:'white',
                        marginTop:70,
                        
                        }}>
                            Our <br/>
                            Approach
                        </div>
                        <div className="uk-align-left" style={{display:'flex',flexDirection:'column',position:'absolute',marginTop:180}}>
                        {/* 1st */}
                        <div style={{flexDirection:'row',display:'flex'}}>
                            <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:20,fontWeight:700,color:'white'}}>Practical </div>
                                <img src={line} style={{width:161,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:12,fontWeight:500,color:'white',marginTop:8}}>providing practical solutions and methods that are <br/>
                                easily applicable in every relationship</div>
                            </div>

                           
                        </div>

                        {/* 2nd */}
                        <div style={{flexDirection:'row',display:'flex',marginTop:40}}>
                        <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:20,fontWeight:700,color:'white'}}>Spirit Led </div>
                                <img src={line} style={{width:161,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:12,fontWeight:500,color:'white',marginTop:8}}>are in tune to the leading and direction of the <br/>
                                Holy Spirit</div>
                            </div>

                           
                        </div>

                        {/* 3rd */}
                        <div style={{flexDirection:'row',display:'flex',marginTop:40}}>
                        <div style={{lineHeight:1}}>
                                <div  style={{font:'Montserrat',fontSize:20,fontWeight:700,color:'white'}}>Bibilical </div>
                                <img src={line} style={{width:161,height:3}} />
                                <div className="" style={{font:'Montserrat',fontSize:12,fontWeight:500,color:'white',marginTop:8}}>The word of God is the foundation of all our teachings <br/>
                                and counselling.</div>
                            </div>

                            
                        </div>
                        </div>
                        <div  style={{marginTop:50}}>
                        <img src={closed} style={{backgroundColor:'black',width:228,height:309}} />
                        </div>
                        
                    </div>

                   <div>
                 
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Approach