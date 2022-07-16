import React from "react"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Nav, Bigtext} from "./components/Index";
import Home from "./Sections/Home";
import Body from "./Sections/Body"
import Vision from "./Sections/Vision"
import Session from "./Sections/Session"
import Apporach from "./Sections/Approach"
import Help from "./Sections/Help"
const  App =()=> {
  return (
    <div>
      {/* <div>
        <Bigtext
         label={'this is big text'}
         style={{fontWeight:'900'}}
        />
        <Bigtext
         label={'this is big text'}
         style={{fontWeight:'600'}}
        />
      <Nav
      label={'this is my new nav'}
      maintitle={'this is the main title'}
      />

      <Nav
      label={'this is another one'}
      maintitle={'new main title'}
      />
      </div>
      <div className="uk-container">

      </div> */}
      <Home/>
      <Body/>
      <Vision/>
      <Session/>
      <Apporach/>
      <Help/>
       
    
    
    </div>
  );
}

export default App;
