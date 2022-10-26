import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkOutDetails = useLoaderData();
    const{user}=useContext(AuthContext)
    const{title } = checkOutDetails
    return (
        <div>
         <h1>{title}</h1>
         <p>
            {user?.displayName && <><p>{user.displayName}</p>
            <p>{user.email}</p></>
            }
         </p>
        
        </div>
    );
};

export default CheckOut;