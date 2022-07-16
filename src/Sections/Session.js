import React from "react";
import Ben from "../Images/Ben.png";
import insta from "../Images/insta.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
const  Session =()=> {
    return(
            <div>
                {/* web */}
                <div className="container uk-align-center uk-visible@m" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:150}}>
                        <div style={{flexDirection:'column',display:'flex',marginLeft:30}}>
                            <div>
                                <img src={Ben} style={{width:466,height:647}} />
                            </div>

                           
                        <div style={{lineHeight:1}}>
                        <div  className="uk-align-center" style={{flexDirection:'column',marginTop:50,marginLeft:100}}>
                                <img src={facebook} style={{marginRight:50}} />
                                <img src={insta} />
                                <img src={twitter} style={{marginLeft:50}}/>
                            </div>

                            <div className="uk-align-center">
                                <div className="uk-button" style={{font:'Montserrat',
                                fontWeight:700,
                                fontSize:20,
                                backgroundColor:'#FCD441',
                                color:'black',width:450,
                                height:50,
                                borderRadius:5,
                                padding:5,
                                
                                
                                
                                }}>
                                Book a session
                                </div>
                            </div>
                        </div>
                           
                        </div>

                        <div style={{flexDirection:'column',display:'flex',marginRight:30}}>
                            <div style={{font:'Montserrat',fontSize:70,fontWeight:900,color:'black',lineHeight:0.93,marginBottom:5}}>
                            MEET OUR <br/>
                            LEAD MENTOR
                            </div>

                            <div style={{color:'black',marginTop:15,font:'Montserrat',fontSize:18,fontWeight:400,lineHeight:1.3}}>
                            Renowned for his pragmatic, innovative and humorous style of <br/>
                            communicating truth, Benson Ogbe is unarguably an influential <br/>
                            leader in the family and relationship engineering sphere. <br/>

                            As a globally certified relationship and marriage counsellor with <br/> 
                            over two decades of refined experience, he serves as the Lead <br/>
                            Mentor at the Benson Ogbe Relationship Mentoring Academy <br/>
                            (BORM), conveners of the “Special for Singles Conferences”  <br/>
                            and the “Making your Marriage Work” seminars across major  <br/>
                            cities in Nigeria and Africa. <br/>
                            <br/>
                            Reaching millions of people via the airwaves, he hosts the <br/>
                            foremost relationship show on popular radio stations. Recently, <br/>
                            he reignited the “Relationship Premium Breakfast Session” that <br/>
                            has convened over 2,000 married and singles onsite and online.<br/>
                            <br/>
                            Benson Ogbe is also the Lead Pastor at the House of Hope <br/>
                            International Church. He is a gifted leadership expert, speaker, <br/>
                            innovator and highly successful practitioner within the <br/>
                            relationship, leadership and process consulting field.<br/>
                            <br/>
                            He has devoted his life to nurturing leaders with integrity and zeal, <br/>
                            to improve the cause of humanity, by empowering them to <br/>
                            awaken the power within. He is passionate about helping people <br/>
                            refine, define and align the right foundations for a blissful <br/>
                            marital life. <br/>
                            <br/>
                            Benson is married to the beautiful Patience Ogbe and they are <br/>
                            blessed with 3 adorable children. They currently have their home <br/>
                            in Jos Plateau State, Nigeria. <br/>
                            </div>
                        </div>
                </div>

                {/* mobile */}
                <div className="container uk-align-center uk-hidden@m uk-hidden@l" style={{display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                marginTop:50}}>
                            <div style={{font:'Montserrat',fontSize:40,fontWeight:900,color:'black',lineHeight:1.2,marginBottom:5}}>
                            MEET OUR <br/>
                            LEAD MENTOR
                            </div>
                        <div style={{flexDirection:'column',display:'flex',marginLeft:30}}>
                            <div className="uk-align-center">
                                <img  src={Ben} style={{width:276,height:386,marginTop:25}} />
                            </div>
                            
                            <div style={{color:'black',font:'Montserrat',fontSize:11,fontWeight:400,lineHeight:1.3}}>
                            Renowned for his pragmatic, innovative and humorous style of <br/>
                            communicating truth, Benson Ogbe is unarguably an influential <br/>
                            leader in the family and relationship engineering sphere. <br/>

                            As a globally certified relationship and marriage counsellor with <br/> 
                            over two decades of refined experience, he serves as the Lead <br/>
                            Mentor at the Benson Ogbe Relationship Mentoring Academy <br/>
                            (BORM), conveners of the “Special for Singles Conferences”  <br/>
                            and the “Making your Marriage Work” seminars across major  <br/>
                            cities in Nigeria and Africa. <br/>
                            <br/>
                            Reaching millions of people via the airwaves, he hosts the <br/>
                            foremost relationship show on popular radio stations. Recently, <br/>
                            he reignited the “Relationship Premium Breakfast Session” that <br/>
                            has convened over 2,000 married and singles onsite and online.<br/>
                            <br/>
                            Benson Ogbe is also the Lead Pastor at the House of Hope <br/>
                            International Church. He is a gifted leadership expert, speaker, <br/>
                            innovator and highly successful practitioner within the <br/>
                            relationship, leadership and process consulting field.<br/>
                            <br/>
                            He has devoted his life to nurturing leaders with integrity and zeal, <br/>
                            to improve the cause of humanity, by empowering them to <br/>
                            awaken the power within. He is passionate about helping people <br/>
                            refine, define and align the right foundations for a blissful <br/>
                            marital life. <br/>
                            <br/>
                            Benson is married to the beautiful Patience Ogbe and they are <br/>
                            blessed with 3 adorable children. They currently have their home <br/>
                            in Jos Plateau State, Nigeria. <br/>
                            </div>
                           
                        <div style={{lineHeight:1}}>
                        <div  className="uk-align-center" style={{flexDirection:'column',marginTop:50,marginLeft:50}}>
                                <img src={facebook} style={{marginRight:50,width:36,height:36}} />
                                <img src={insta} style={{width:36,height:36}} />
                                <img src={twitter} style={{marginLeft:50,width:36,height:36}}/>
                            </div>

                            <div className="uk-align-center">
                                <div className="uk-button" style={{font:'Montserrat',
                                fontWeight:700,
                                fontSize:20,
                                backgroundColor:'#FCD441',
                                color:'black',width:320,
                                height:60,
                                borderRadius:5,
                                padding:5,
                                
                                
                                
                                }}>
                                Book a session
                                </div>
                            </div>
                        </div>
                           
                        </div>

                        <div style={{flexDirection:'column',display:'flex',marginRight:30}}>
                           

                            
                        </div>
                </div>
            </div>
    )
}

export default Session