import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminButton = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/admin');
    };

    return(
        <button onClick={handleAdminClick}>Admin</button>
    );
};

export default AdminButton;