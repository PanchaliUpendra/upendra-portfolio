import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Loading from './Components/Loading/Loading';
import Homepage from './Components/Homepage/Homepage';
import Mernstack from './Components/Mernstack/Mernstack';
import Firebase from './Components/Firebase/Firebase';

function App() {
  const [displayloading,setdiplayloading]=useState(true);
  const scrollToRef=useRef(null);
  const scrollToElement = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'});
    
    const timer=setTimeout(()=>{
      setdiplayloading(false);
    },4000);
    return ()=>{
        clearTimeout(timer)
    }

    
  },[])

  return (
    <div>
      {displayloading?<Loading scrollToElement={scrollToElement} />:<></>}
      <Navbar scrollToRef={scrollToRef}/>
      <Homepage/>
      <Mernstack/>
      <Firebase/>
    </div>
  );
}

export default App;
