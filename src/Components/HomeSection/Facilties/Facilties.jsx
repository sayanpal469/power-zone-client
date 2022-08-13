import React from 'react';
import './Facilties.css'
import { MdSecurity } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

const Facilties = () => {
    return (
        <div className='my-28 px-20'>
            <h1 className='text-center uppercase text-5xl font-bold'>Our <span className='text-warning'>facilties</span></h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-10'>

                <div className='f text-center shadow-md px-10 py-8 border-0 hover:bg-warning hover:text-white'>
                    <MdSecurity className='mt-10 text-6xl  m-auto text-yellow-400 logo'></MdSecurity>
                    <h3 className='mt-5 text-2xl font-bold mb-3'>Highly Secured</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab cumque architecto inventore dolore enim accusamus magnam repellendus eveniet? Laborum!</p>
                </div>
                <div className='f text-center shadow-md px-10 py-8 border-0 hover:bg-warning hover:text-white'>
                    <FaRegHandshake className='mt-10 text-6xl w-20 m-auto text-yellow-400 logo'></FaRegHandshake>
                    <h3 className='mt-5 text-2xl font-bold mb-3'>Highly Secured</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab cumque architecto inventore dolore enim accusamus magnam repellendus eveniet? Laborum!</p>
                </div>
                <div className='f text-center shadow-md px-10 py-8 border-0 hover:bg-warning hover:text-white'>
                    <AiOutlineDollarCircle className='mt-10 text-6xl w-20 m-auto text-yellow-400 logo'></AiOutlineDollarCircle>
                    <h3 className='mt-5 text-2xl font-bold mb-3'>Highly Secured</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab cumque architecto inventore dolore enim accusamus magnam repellendus eveniet? Laborum!</p>
                </div>
                <div className='f text-center shadow-md px-10 py-8 border-0 hover:bg-warning hover:text-white'>
                    <BiSupport className='mt-10 text-6xl w-20 m-auto text-yellow-400 logo'></BiSupport>
                    <h3 className='mt-5 text-2xl font-bold mb-3'>Highly Secured</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ab cumque architecto inventore dolore enim accusamus magnam repellendus eveniet? Laborum!</p>
                </div>

            </div>
        </div>
    );
};

export default Facilties;