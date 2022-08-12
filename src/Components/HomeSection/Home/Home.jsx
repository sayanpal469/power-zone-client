import React from 'react';
import Products from '../Products/Products';
import Second from '../SecondPara/Second';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import TopBaner from '../TopBanner/TopBaner';

const Home = () => {
    return (
        <div>
            <TopBaner/>
            <Second/>
            <Products/>
            <ThirdBanner/>
        </div>
    );
};

export default Home;