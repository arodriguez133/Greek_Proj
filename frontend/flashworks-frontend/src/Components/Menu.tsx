import React from 'react';
import HomeButton from './HomeButton';
import AdminButton from './AdminButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


const Menu = () => {
    return (
        <>
        <div className="menu">
            <div className='menu-options-container'>
                <HomeButton/>
                <AdminButton/>
                <LoginButton/>
                <LogoutButton/>
            </div>
        </div>
        </>
    )
}

export default Menu;