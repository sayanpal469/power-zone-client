import React from 'react';

const ThirdBanner = () => {
    return (
        <div className='mt-20 mb-10 w-[80%] grid lg:grid-cols-2 sm:grid-cols-1  lg:gap-40 mx-auto items-center'>
            <div>
                <img className='' src="https://i.ibb.co/cYyyB3p/Third.jpg" alt="" />
            </div>
            <div>
                <h1 className='uppercase text-7xl font-semibold text-gray-200 mb-10'>About Us</h1>
                <p className='text-4xl font-bold text-warning mb-2 uppercase'>We are here to dream!</p>
                <p className='text-4    xl font-bold mb-10 uppercase'> Our team is here surve you</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aspernatur necessitatibus quam officiis! Explicabo tempora tenetur illo nihil atque magni excepturi velit temporibus officia maxime, nulla possimus nisi nesciunt. Eos beatae facilis at reiciendis omnis officia doloremque dolor dolorem vero, blanditiis repudiandae! Modi, laboriosam magnam placeat et deleniti hic eius.</p>
            </div>
        </div>
    );
};

export default ThirdBanner;