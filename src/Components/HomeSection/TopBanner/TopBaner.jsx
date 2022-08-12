import React from 'react';
import './TopBanner.css'

const TopBaner = () => {
    return (
        <div className='topBanner relative grid lg:grid-cols-2  items-center'>
            <div className='text-white ml-14'>
                <h1 className='text-7xl font-semibold'>THE BEST FITNESS</h1>
                <h1 className='text-7xl font-semibold mt-5 mb-10'>STUDIO IN TOWN</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, pariatur? Ullam delectus minus, culpa numquam aliquam corporis nulla tenetur odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus illo et? Corporis perferendis tempore autem vero cupiditate illo ut eum voluptas doloremque. Ratione suscipit ex ullam fugiat sequi blanditiis?</p>

                <button className='btn rounded-none bg-yellow-400 text-xl border-0 mt-10 px-10 py-2 text-black hover:bg-yellow-500'>JOIN US</button>
            </div>
            <div></div>
        </div>
    );
};

export default TopBaner;