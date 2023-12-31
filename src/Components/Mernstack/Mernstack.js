import React from "react";
import './Mernstack.css';
import cryptohunterimg from '../../images/cryptohunterimg.png';
import onlineexamimg from '../../images/onlineexamimg.png';
import foodieimg from '../../images/foodieimg.jpeg';

function Mernstack(){


    return(
        <>
        <div className="mernstack-container " >
            <div className='mernstack-con-header'>
                <h1>Mern stack projects</h1>
            </div>
            {/* all projects starts here */}
            <div className='mern-stack-pro-con'>
                <div className='mernstack-projects'>
                    <h1>Online Exam Platform</h1>
                    <img src={onlineexamimg} alt="onlineexam" className='merstack-project-img'/>
                    <ul className='mernstack-developers-skills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-Routers</li>
                        <li>NodeJS</li>
                        <li>ExpressJs</li>
                        <li>MongoDB</li>
                        <li>Material-UI</li>
                    </ul>
                    <p className='mernstack-pro-des'><span>Description:</span> Welcome to our online exam platform, where students 
                    can take exams and teachers can create and schedule tests 
                    effortlessly. Join us for a seamless and convenient way to 
                    assess and improve your knowledge.</p>
                    <div className='mearnstack-project-links'>
                        <button><a href="https://github.com/PanchaliUpendra/onlineExamPlatform" target="_blank" rel="noopener noreferrer">CODE</a></button>
                        {/* <button><a href="https://github.com/PanchaliUpendra/onlineExamPlatform" target="_blank" rel="noopener noreferrer">Live</a></button> */}
                    </div>
                </div>

                {/*project number 2*/}
                <div className='mernstack-projects'>
                    <h1>Foodie e-commerce</h1>
                    <img src={foodieimg} alt="onlineExam" className='merstack-project-img'/>
                    <ul className='mernstack-developers-skills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-Routers</li>
                        <li>NodeJS</li>
                        <li>ExpressJs</li>
                        <li>MongoDB</li>
                        <li>Material-UI</li>
                    </ul>
                    <p className='mernstack-pro-des'><span>Description:</span> A groundbreaking e-commerce venture that transforms your online food and vegetable 
                    shopping experience. Browse a diverse selection of fresh produce 
                    and gourmet delights, effortlessly add your favorite products to 
                    your cart, and tailor quantities to meet your specific needs.</p>
                    <div className='mearnstack-project-links'>
                    <button><a href="https://github.com/PanchaliUpendra/FoodieFullStack" target="_blank" rel="noopener noreferrer">CODE</a></button>
                        {/* <button><a href="https://github.com/PanchaliUpendra/houserentmern" target="_blank" rel="noopener noreferrer">Live</a></button> */}
                    
                    </div>
                </div>
                {/* project number 3 */}
                <div className='mernstack-projects'>
                    <h1>Crypto Hunter</h1>
                    <img src={cryptohunterimg} alt="cryptohunter" className='merstack-project-img'/>
                    <ul className='mernstack-developers-skills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-Routers</li>
                        <li>NodeJS</li>
                        <li>ExpressJs</li>
                        <li>MongoDB</li>
                        <li>Material-UI</li>
                    </ul>
                    <p className='mernstack-pro-des'><span>Description:</span>Discover the realm of 
                    cryptocurrency: a decentralized digital landscape reshaping 
                    finance. Explore blockchain, trade coins, and grasp the future 
                    of money, all through the transformative power of crypto.</p>
                    <div className='mearnstack-project-links'>
                        <button><a href="https://github.com/PanchaliUpendra?tab=repositories" target="_blank" rel="noopener noreferrer">CODE</a></button>
                        {/* <button><a href="https://github.com/PanchaliUpendra?tab=repositories" target="_blank" rel="noopener noreferrer">Live</a></button> */}
                    </div>
                </div>
                {/* projects completed */}
            </div>
        </div>
        
        </>
    );
}

export default Mernstack;