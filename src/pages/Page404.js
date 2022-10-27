import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='d-flex justify-content-center my-5 p-5 '><div className='bg-primary w-50 text-center p-4'>
        <h1 className='fw-bold'>This route is not found</h1>
        <p>Please go to <Link to ="/" className=' text-danger fw-bold'>Home</Link></p>
    </div></div>
    );
};

export default Page404;
