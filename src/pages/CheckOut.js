import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkOutDetails = useLoaderData();
    const{user}=useContext(AuthContext)
    const{title,about } = checkOutDetails
    return (
        <div className='d-lg-flex justify-content-around'>
         <div className='mx-3 my-5'><h1>{title}</h1>
         <p>{about}</p></div>

         <div className='my-5 mx-4 border border-0 p-3 bg-dark text-light '>
            {user?.uid && <div>
            <p >Name :  <span>{user.displayName}</span></p>
            <p >Email:  <span >{user.email}</span></p></div>
            }
         </div>
        
        </div>
    );
};

export default CheckOut;