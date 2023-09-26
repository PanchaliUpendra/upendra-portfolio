import React from 'react';
import './Firebase.css';
import storeshopimg from '../../images/storeshopimg.png';
import onlineExam from '../../images/onlineexam.png';
import paradiseimg from '../../images/paradiseimg.png'
function Firebase(){
    return(
        <>
        <div className='firebase-container'>

            {/* firebase containers headers */}
            <div className='firebase-header'>
                <h1>Firebase Projects</h1>
                <p>"Proficiently developed React websites with seamless Firebase integration. Combining dynamic frontend using React with Firebase's robust backend for optimal web performance."</p>
            </div>
            {/* firebase each container */}
            <div className='all-firebase-each-container'>
                <div className='firebase-con-projects-each-div'>
                    <div className='firebase-con-projects-each-div-header'>
                        <h1>Local Online Store</h1>
                        <p>By combining React frontend with Firebase backend, the local store website 
                        displays products seamlessly. Dynamic rendering of product details via React 
                        components from Firebase's Firestore database enables easy user cart 
                        management. This synergy streamlines shopping and simplifies shopkeeper tasks 
                        for an enhanced experience.</p>
                        <div className='firebase-con-projects-each-div-header-btn'>
                            <p><span><a href="https://github.com/PanchaliUpendra/Local-Store-Shop" target="_blank" rel="noopener noreferrer">Code</a></span></p>
                            <p><span><a href="https://localonlinestore.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a></span></p>
                        </div>
                    </div>
                    <img src={storeshopimg} alt="firebase-each-icons" className='firebase-con-projects-each-div-img'/>
                </div>
                <div className='firebase-con-projects-each-div'>
                    <div className='firebase-con-projects-each-div-header'>
                        <h1>HouseRent--Firebase App</h1>
                        <p>HouseRent utilizes Firebase and React.js to provide a user-friendly app for effortless house 
                        hunting and rental management. The app leverages Firebase's backend capabilities to streamline 
                        property searches, manage listings, and facilitate seamless communication between renters and landlords. 
                        This integration simplifies the rental process, enhancing the overall user experience.</p>
                        <div className='firebase-con-projects-each-div-header-btn'>
                            <p><span><a href="https://github.com/PanchaliUpendra/Houserental" target="_blank" rel="noopener noreferrer">Code</a></span></p>
                            <p><span><a href="https://houserental.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a></span></p>
                        </div>
                    </div>
                    <img src={onlineExam} alt="firebase-each-icons" className='firebase-con-projects-each-div-img'/>
                </div>
                <div className='firebase-con-projects-each-div'>
                    <div className='firebase-con-projects-each-div-header'>
                        <h1>Paradise Hotel menu</h1>
                        <p>Welcome to the Paradise Hotel Menu, where we invite you to savor a world of 
                        culinary delights inspired by our stunning location. Whether you're seeking the 
                        freshest seafood at our Ocean Breeze Restaurant, the fusion of international flavors 
                        at the Tropical Terrace Cafe, or the convenience of in-room dining, our menu offers a 
                        diverse range of options to satisfy your palate. Don't forget to explore our Cocktail Bar, 
                        where expertly crafted cocktails await. </p>
                        <div className='firebase-con-projects-each-div-header-btn'>
                            <p><span><a href="https://github.com/PanchaliUpendra/paradise" target="_blank" rel="noopener noreferrer">Code</a></span></p>
                            <p><span><a href="https://sripra-paradise.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a></span></p>
                        </div>
                    </div>
                    <img src={paradiseimg} alt="firebase-each-icons" className='firebase-con-projects-each-div-img'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Firebase;