import React from 'react';
import './Oldprojects.css';
import oldprojectsimg from '../../images/oldprojects.png';

function Oldprojects(){
    return(
        <>
            <div className='oldprojects-con'>
                <div className='mernstack-con-header'>
                    <h1>my old projects</h1>
                </div>
                <div className='oldprojects-firstpara'>
                    <p>In my journey as a developer, I recognize the importance of embracing 
                    both the triumphs and tribulations. My portfolio isn't just a showcase of 
                    my latest and most attractive projects; it's a reflection of my growth and 
                    evolution as a developer. Under the "My Old Projects" section, you'll find 
                    projects that may not be as visually captivating as my newer creations, but 
                    they hold a special place in my learning journey. These earlier works encompass 
                    a range of frontend and fullstack projects, each representing valuable lessons and 
                    experiences. They've helped me identify areas for improvement, develop my problem-solving 
                    skills, and most importantly, learn from my mistakes.</p>
                </div>
                <div className='oldprojects-secondpara'>
                    <p>The inclusion of my old projects in this portfolio is a testament to my commitment to 
                    growth and my belief that success is not measured solely by the final product but by the 
                    journey taken to reach it. I've chosen to share these projects to showcase the strides I've 
                    made in my development journey. It's a reminder that even when faced with less-than-perfect 
                    results, each project has provided an opportunity to refine my skills, learn from past missteps, 
                    and continually push the boundaries of what's possible in the world of frontend and fullstack development. 
                    These experiences have been instrumental in shaping who I am today and have brought me to where I am in my career.</p>
                    <a href="https://panchaliupendra.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={oldprojectsimg} alt="oldprojects-logo" className='oldprojects-img'/></a>
                </div>
                <button> <a href="https://panchaliupendra.netlify.app/" target="_blank" rel="noopener noreferrer">Show Old Projects</a></button>
            </div>
        </>
    );
}

export default Oldprojects;