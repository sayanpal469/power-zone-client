import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Facilties from '../Facilties/Facilties';
import Products from '../Products/Products';
import Second from '../SecondPara/Second';
import FourthBanner from '../FourthBanner/FourthBanner';
import TopBaner from '../TopBanner/TopBaner';
import ThirdBanner from '../ThirdBanner/ThirdBanner';

const Home = () => {
    return (
        <div>
            <Second/>
            <TopBaner/>
            <ThirdBanner/>
            <Products/>
            <FourthBanner/>
            <Facilties/>
            <Footer/>
        </div>
    );
};

export default Home;