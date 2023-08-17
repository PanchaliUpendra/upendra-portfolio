import React,{useEffect}from 'react';
import './Loading.css';
import displayimg from '../../images/prologo.PNG';
function Loading(props){
    
    useEffect(()=>{
        const timer=setTimeout(()=>{
            props.scrollToElement()
        },3000);
        return ()=>{
            clearTimeout(timer)
        }
    },[props]);
    return(
        <>
        <div className='loading-container'>
            <img src={displayimg} alt='display logo' className='loading-profile-icon'/>
            {/* {displayproject?<p className='loading-container-para'></p>:<p className='loading-container-para'>PROJECTS</p>} */}
            <p className='loading-container-para'>PROJECTS</p>
        </div>
        </>
    );
}

export default Loading;