import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BannerSubscribe.css'

const bannerSubscribe = () => {
    return (
        <div className=' bg-primary mt-5'>
            <div className='container'>

                <div class="row">
                    <div class="col-lg-8 col-md-12 col-12 mt-3">
                        <h1 className='subcribeText'>Subscribe Our Newsletter</h1>
                        <p className='subcribeText'>Be the first to know .sign Up for newsletter today!</p>
                    </div>
                    <div className=" col-lg-4 col-md-12 col-12 d-flex justify-content-start d-flex justify-content-start px-2 py-5"><button className='button'><Link to='/register'>Sign Up</Link></button></div>
                </div>
            </div>
        </div>
    );
};

export default bannerSubscribe;