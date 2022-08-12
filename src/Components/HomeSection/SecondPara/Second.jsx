import React from 'react';
import './Second.css'

const Second = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-20 px-20 gap-5'>

            <div class="card one max-w-lg bg-cover bg-base-100 shadow-xl image-full rounded-none">
                <div class="card-body text-center">
                    <img className='w-12 mx-auto mt-20' src="https://i.ibb.co/1Kn7Nxc/progression.png" alt="" />
                    <h2 class="text-3xl font-semibold mt-5">PROGRESSION</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea saepe animi veritatis illo? Tempore ad atque tenetur rem deleniti!</p>
                </div>
            </div>

            <div class="card two max-w-lg bg-cover bg-base-100 shadow-xl image-full rounded-none">
                <div class="card-body text-center">
                    <img className='w-28 mx-auto mt-20' src="https://i.ibb.co/F32sHYT/fitness.png" alt="" />
                    <h2 class="text-3xl font-semibold mt-5 text-yellow-400">WORKOUT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloribus adipisci. Deserunt, tempore! Deleniti, voluptatibus. Fugiat officia quos necessitatibus labore?</p>
                </div>
            </div>

            <div class="card three max-w-lg shadow-xl image-full rounded-none">
                <div class="card-body text-center">
                    <img className='w-12 mx-auto mt-20' src="https://i.ibb.co/sqLNxm0/nutration.png" alt="" />
                    <h2 class="text-3xl font-semibold mt-5">NUTRATION</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut perspiciatis dicta officia voluptatum asperiores quas incidunt, laudantium optio ducimus.</p>
                </div>
            </div>
        </div>
    );
};

export default Second;