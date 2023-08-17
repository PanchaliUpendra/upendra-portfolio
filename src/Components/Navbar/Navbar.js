import React from 'react';
import './Navbar.css';
import logoimg from '../../images/prologo.PNG';
function Navbar(props){
    return(
        
        <>
        <div className='navbar-container' ref={props.scrollToRef}>
            <div className='navbar-logo-container'>
            <img src={logoimg} alt="logo displays here" className='navbar-logo-bomma'/>
            <p>PANCHALI</p>
            </div>
            <p>Portfolio</p>
        </div>
        
        </>
    );
}

export default Navbar;