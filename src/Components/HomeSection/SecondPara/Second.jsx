import React from 'react';
import './Second.css'
import { VscCreditCard } from 'react-icons/vsc'
import { TbRefreshAlert } from 'react-icons/tb'
import { TbTruckDelivery } from 'react-icons/tb'
import { HiOutlinePhoneMissedCall } from 'react-icons/hi'

const Second = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 my-5 lg:px-20 sm:px-14 gap-5 sgrid'>
            <div className='flex items-center text-center'>
                <VscCreditCard className='mr-2 lg:text-3xl sm:text-2xl text-yellow-500'></VscCreditCard>
                <p className='lg:text-lg  font-semibold'>Low price guarantee</p>
            </div>
            <div className='flex items-center text-center'>
                <TbRefreshAlert className='mr-2 lg:text-3xl sm:text-2xl text-yellow-500'></TbRefreshAlert>
                <p className='lg:text-lg font-semibold'>30 days online return</p>
            </div>
            <div className='flex items-center text-center'>
                <TbTruckDelivery className='mr-2 lg:text-3xl sm:text-2xl text-yellow-500'></TbTruckDelivery>
                <p className='lg:text-lg font-semibold'>Free delivary worldwide</p>
            </div>
            <div className='flex items-center text-center'>
                <HiOutlinePhoneMissedCall className='lg:text-3xl sm:text-2xl text-yellow-500'></HiOutlinePhoneMissedCall>
                <p className='lg:text-lg lg:ml-2 sm:ml-5 font-semibold'>Contact<span className='text-red-600'>+917872358979</span></p>
            </div>
        </div>
    );
};

export default Second;