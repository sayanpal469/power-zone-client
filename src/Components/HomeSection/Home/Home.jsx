import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Facilties from '../Facilties/Facilties';
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
            <Facilties/>
            <Footer/>
        </div>
    );
};

export default Home;