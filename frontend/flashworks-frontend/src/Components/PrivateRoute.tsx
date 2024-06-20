import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';


const PrivateRoute = ({component: Component}: {component: React.ComponentType}) => {
    const {isAuthenticated} = useAuth0();

    return (
        isAuthenticated ? <Component/> : <Navigate to="/" />
    );
};

export default PrivateRoute;