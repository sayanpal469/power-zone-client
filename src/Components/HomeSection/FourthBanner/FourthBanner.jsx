import React from 'react';

const FourthBanner = () => {
    return (
        // <div className='mt-20 mb-10 w-[80%] grid lg:grid-cols-2 sm:grid-cols-1  lg:gap-40 mx-auto items-center'>
        //     <div>
        //         <img className='' src="https://i.ibb.co/cYyyB3p/Third.jpg" alt="" />
        //     </div>
        //     <div>
        //         <h1 className='uppercase text-7xl font-semibold text-gray-200 mb-10'>About Us</h1>
        //         <p className='text-4xl font-bold text-warning mb-2 uppercase'>We are here to dream!</p>
        //         <p className='text-4xl font-bold mb-10 uppercase'> Our team is here surve you</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aspernatur necessitatibus quam officiis! Explicabo tempora tenetur illo nihil atque magni excepturi velit temporibus officia maxime, nulla possimus nisi nesciunt. Eos beatae facilis at reiciendis omnis officia doloremque dolor dolorem vero, blanditiis repudiandae! Modi, laboriosam magnam placeat et deleniti hic eius.</p>
        //     </div>
        // </div>
        <section class="text-gray-600 body-font px-14">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/cYyyB3p/Third.jpg" />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className='title-font uppercase lg:text-7xl md:text-5xl font-semibold text-gray-200 mb-6'>About Us</h1>
                    <p className='lg:text-5xl md:text-3xl font-bold text-warning mb-2 uppercase'>We are here to dream!</p>
                    <p className='lg:text-5xl md:text-3xl font-bold mb-5 uppercase'> Our team is here surve you</p>
                    <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, officia! Tempore distinctio inventore explicabo cupiditate. Repellendus, nisi illum repellat animi distinctio minima quis sint in</p>
                    <div class="flex justify-center">
                        <button class="inline-flex btn-warning border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-none btn ">Shop now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthBanner;