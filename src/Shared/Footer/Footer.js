import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5'>
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12"><h3>Hunter Laptop</h3>
                            <p>mirpur-2,dhaka-1216</p>
                            <p>01777777777</p>
                            <p>abu@gmail.com</p>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><h3>Information</h3></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><h3>My Account</h3></div>
                        <div class="col-lg-3 col-md-6 col-sm-12"><h3>Join Our List Offers</h3></div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='footer-area d-flex align-items-center justify-content-center'>
                    <p>Dream Weaver <small>copyright ©{year} </small></p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;