import React from 'react';
import './Homepage.css';
import hero from '../../images/profileimg.jpeg';
import downarrow from '../../images/downarrow.gif';
function Homepage(){
    return(
        <>

        <div className='Homepage-container'>
            <div className='Homepage-container-divs'>
                <div className='homepage-con-div1'>
                    <h1>Hello Everyone!!!</h1>
                    <p>Welcome to my project portfolio! My name is  
                    <span> PANCHALI_UPENDRA </span>, and I am a passionate and driven<span> FULLSTACK_DEVELOPER </span>
                    with a strong interest in <span>PROGRAMMING </span>and <span>DEVOPS</span>. 
                    Throughout my journey, I have been on a quest to merge 
                    creativity with technology, creating meaningful and impactful projects 
                    that make a difference.</p>
                </div>
                <div className='homepage-con-div2'>
                    <img src={hero} alt='hero' className='homepage-con-div2-img'/>
                </div>
            </div>
            <div className='lottie-file-down'>
                <img src={downarrow} alt='downarrow' className='lottie-downarrow'/>
            </div>
            
        </div>
        


        </>
    );
}

export default Homepage;