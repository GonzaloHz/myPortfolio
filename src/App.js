import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import ScrollButton from './Components/NavBar/ScrollButton/ScrollButton';
import ScrollMessage from './Components/NavBar/ScrollButton/ScrollMessage';
import Work from './Components/Work/Work';
function App() {
  const [ boolean, setBoolean ] = useState(false)
  const [ conditions, setConditions ] = useState(" ")
  const [ message, setMessage ] = useState(true)

  const handleOnMessage=(cond)=>{
    if(cond=== "msg"){
    setMessage(false)
  }else{
    setMessage(true)
    }
  }
  const handleOnRedirect3=(condition)=>{
    if(condition==="close"){
      setConditions("close")
    }
    if(condition==="uno"){
      setConditions("uno")
    }
    if(condition==="dos"){
      setConditions("dos")
    }
    if(condition==="tres"){
      setConditions("tres")
    }
    setBoolean(!boolean)
}
  return (
    <div className="App">
      <NavBar booleanValue={boolean}/>
      <div>
        <div className='Home'>
        <Home handleOnHand3={condition=>handleOnRedirect3(condition)} booleanValue={boolean} conditions={conditions}/>
        </div>
        <div className="Sections">
        <About/>
        <div className="Sections">
        <Work handleOnHand3={condition=>handleOnRedirect3(condition)}/>
        <div className="Sections1">
        <Contact/>
        </div>
        </div>
        </div>
      </div>
      <ScrollButton handleOnMessage={(cond)=>handleOnMessage(cond)}/>
      <ScrollMessage message={message} handleOnMessage={(cond)=>handleOnMessage(cond)}/>
    </div>
  );
}

export default App;
