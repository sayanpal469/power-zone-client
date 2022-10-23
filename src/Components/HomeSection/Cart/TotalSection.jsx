import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const TotalSection = ({ subTotal_amount, cartItemsUpdate }) => {
    const [user] = useAuthState(auth);
    const email = user?.email

    const handelCheckOut = () => {
        const checkOutsInfo = { email, subTotal_amount, cartItemsUpdate }
        const url = `http://localhost:5000/checkOuts/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkOutsInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
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

            <Link onClick={handelCheckOut} to='/checkOut' className='text-center btn btn-warning w-full rounded-none mt-5'>Proceed checkout</Link>
        </div>
    );
};

export default TotalSection;