import React from 'react';
import {useMenu} from './MenuContext';




const Hamburger = () => {
    const {isOpen, toggleMenu} = useMenu();


    return(
        <div className="hamburger-container" onClick={toggleMenu}>
                <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
                    <span className='hamburger-bar hamburger-bar-1'></span>
                    <span className="hamburger-bar hamburger-bar-2"></span>
                    <span className="hamburger-bar hamburger-bar-3"></span>
                </div>
            </div>
    )
}

export default Hamburger;