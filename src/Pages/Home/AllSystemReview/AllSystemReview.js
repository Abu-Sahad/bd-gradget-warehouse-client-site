import React from 'react';
import './AllSystemReview.css'

import { BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RiLuggageCartFill } from 'react-icons/ri';

const AllSystemReview = () => {
    return (
        <div className='container text.light mt-5'>
            <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-3">
                    <RiLuggageCartFill className='icon-size'></RiLuggageCartFill>
                    <h3>Free Shipping</h3>
                    <p>Free shipping on US order or avobe order $200</p>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3">
                    <BiSupport className='icon-size'></BiSupport>
                    <h3>Support 24/7</h3>
                    <p>Contact us 24 hours a day. 7 days a week</p>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3">
                    <GiTakeMyMoney className='icon-size'></GiTakeMyMoney>
                    <h3>60-Days Return</h3>
                    <p>If you don;t it, you have 60 days to return it.</p>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3">
                    <MdPayment className='icon-size'></MdPayment>
                    <h3>Secure Payment</h3>
                    <p>We ensure secure payment with the PEV</p>
                </div>
            </div>
        </div>
    );
};

export default AllSystemReview;