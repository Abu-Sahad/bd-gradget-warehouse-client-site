import React from 'react';
import notFound from '../../../src/Images/NotFound/notfound.png'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>This page is not founded</h1>
            <div className='text-center'>
                <img className='w-75' src={notFound} alt="" />
            </div>

        </div>
    );
};

export default NotFound;