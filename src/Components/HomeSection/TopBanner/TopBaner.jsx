import React from 'react';
import './TopBanner.css'

const TopBaner = () => {
    return (
        // <div className='topBanner grid lg:grid-cols-2 relative justify-center items-center px-10 bg-fixed'>
        //     <div className='text-white ml-14'>
        //         <h1 className='text-7xl font-bold'>Boost your <br /> immune system today</h1>
        //         <p className='text-2xl mt-10 font-bold'>24g of pure protein for enhanced lean muscle.</p>
        //         <button className='btn rounded-none bg-yellow-400  border-0 mt-10 px-10 py-2 text-black hover:bg-yellow-500'>Shop now</button>
        //     </div>
        //     <div className="BannerInstument">
        //         <div className='absolute z-20 mt-20 right-[650px] text-2xl'>
        //             <div className='bg-red-500 rounded-full text-white px-5 py-10 font-semibold'>
        //                 30% Off
        //             </div>
        //         </div>
        //         <div className='relative z-10'>
        //             <img src="https://i.postimg.cc/9f7qjNWW/h1-img-1.png" alt="" />
        //         </div>
        //     </div>
        // </div>

        <section class="text-gray-600 body-font px-12 topBanner bg-fixed">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className='title-font sm:text-6xl lg:text-7xl mb-4 text-white font-semibold'>Boost your <br /> immune system today</h1>
                    <p class="mb-8 leading-relaxed lg:text-2xl font-medium text-white">24g of pure protein for enhanced lean muscle</p>
                    <div class="flex justify-center">
                        <button class="inline-flex bg-yellow-400 text-black border-0 py-2 px-7 rounded-none focus:outline-none hover:bg-yellow-700 text-lg uppercase">Shop now</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.postimg.cc/9f7qjNWW/h1-img-1.png" />
                </div>
            </div>
        </section>
    );
};

export default TopBaner;