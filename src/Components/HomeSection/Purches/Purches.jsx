import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiElectric } from 'react-icons/gi';
import useProductDetails from '../../../Hooks/useProductDetails';

const Purches = () => {
    const { productId } = useParams()
    const [item] = useProductDetails()
    const navigate = useNavigate()

    const { picture, name, price, description } = item;


    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20 gap-10 py-10 h-screen bg-white'>
            <div className='w-[80%]'>
                <img className='bg-base-200 w-full' src={picture} alt="" />
            </div>

            <div>
                <h1 className='text-5xl mt-14'>{name}</h1>
                <p className='mt-7 text-lg'>{description}</p>
                <p type='text' className='text-3xl font-semibold mt-5'>${price}</p>
                <div className='flex gap-5 mt-5'>
                    <button className='btn bg-orange-400 border-0 rounded-none px-6'><AiOutlineShoppingCart className='text-lg mr-1'></AiOutlineShoppingCart> Add to cart</button>
                    <button onClick={() => navigate(`/buy/${productId}`)} className='btn bg-orange-500 border-0 rounded-none px-5'><GiElectric className='text-lg'></GiElectric> Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Purches;