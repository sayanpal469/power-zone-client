import React from 'react';

const TotalSection = ({ subTotal_amount }) => {
    return (
        <div className='py-10 px-6'>
            <h1 className='uppercase text-2xl font-bold'>Cart totals</h1>
            <hr />
            <div className='text-lg font-bold flex justify-between items-center px-5 py-3'>
                <p>Subtotals</p>
                <p>${subTotal_amount}</p>
            </div>
            <hr />
            <div className='text-lg font-bold flex justify-between items-center px-5 py-3'>
                <p>Total</p>
                <p>${subTotal_amount}</p>
            </div>

            <button className='text-center btn btn-warning w-full rounded-none mt-5'>Proceed checkout</button>
        </div>
    );
};

export default TotalSection;