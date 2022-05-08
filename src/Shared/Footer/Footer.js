import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 footer-main pt-5'>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12"><h3>Hunter Laptop</h3>
                            <p>mirpur-2,dhaka-1216</p>
                            <p>01777777777</p>
                            <p>abu@gmail.com</p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Information</h3>
                            <div className='information-link'>
                                <Link to='/home'>Home</Link>
                                <Link to='/blog'>Blogs</Link>
                                <Link to='/myItems'>My Items</Link>
                                <Link to='/manage-item'>Manage Items</Link>
                                <Link to='/add-item'>Add Items</Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>My Account</h3>
                            <div className='information-link'>
                                <Link to='/login'>Sign In</Link>
                                <Link to='/register'>Sign Up</Link>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3 className='mb-3'>Join Our List Offers</h3>
                            <p>The long barrow was built on land previously inhabited in the Mesolithic period.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='footer-area d-flex align-items-center justify-content-center'>
                    <p>Hunter Laptop <small>copyright ©{year} </small></p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;