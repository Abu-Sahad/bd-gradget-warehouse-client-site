import React from 'react';
import AllSystemReview from '../AllSystemReview/AllSystemReview';
import Banner from '../Banner/Banner';
import Items from '../Banner/Items/Items';
import BannerSubscribe from '../BannerSubscribe/BannerSubscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <AllSystemReview></AllSystemReview>
            <BannerSubscribe></BannerSubscribe>

        </div>
    );
};

export default Home;