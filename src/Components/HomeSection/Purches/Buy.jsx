import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProductDetails from '../../../Hooks/useProductDetails';

const Buy = () => {
    const [user] = useAuthState(auth);
    const [item] = useProductDetails();
    const { picture, name, price } = item;
    const [totalPrice, setTotalPrice] = useState()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setTotalPrice(item?.price)
    }, [item])



    const quantityPlus = () => {
        setQuantity(quantity + 1)
        setTotalPrice(quantity * price)
    }



    const quantityMinus = () => {
        setQuantity(quantity - 1)
        setTotalPrice(quantity * price)
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const product = item?.name;
        const productImg = item?.picture;
        const price = item?.price;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const pinCode = e.target.pinCode.value;
        const phone = e.target.phoneNumber.value;
        const address = e.target.address.value;

        const orderInfo = { product, productImg, price, userName, userEmail: userEmail, pinCode, phone, address, quantity, totalPrice }

        const url = `http://localhost:5000/orders`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, 
            body: JSON.stringify(orderInfo)
        })
    }

    return (
        <form onClick={handelSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20 py-10'>
            <div class="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                <div class="card-body">
                    <h1 className='text-3xl mt-2 mb-5'>Delivery Details</h1>
                    <div class="form-control">
                        <input type="text" disabled value={user?.displayName} placeholder="Name" class="input bg-base-200 rounded-none" />
                    </div>
                    <div class="form-control">
                        <input type="email" disabled value={user?.email} placeholder="Email" class="input bg-base-200 rounded-none" />
                    </div>
                    <div class="form-control">
                        <input type="text" disabled value={name} placeholder="Product Name" class="input bg-base-200 rounded-none" />
                    </div>
                    <div class="form-control">
                        <input name='pinCode' type="text" placeholder="Pin code" class="input bg-base-200 rounded-none" />
                    </div>
                    <div class="form-control">
                        <input name='phoneNumber' type="text" placeholder="Phone Number" class="input bg-base-200 rounded-none" />
                    </div>
                    <div class="form-control">
                        <textarea name='address' type="text" placeholder="Address (Area and Street)" class="textarea bg-base-200 h-24 rounded-none" />
                    </div>

                    <div class="form-control mt-6">
                        <input type='submit' value='Place Order' class="btn btn-warning rounded-none capitalize text-lg hover:bg-yellow-500" />
                    </div>
                </div>
            </div>


            <div className='px-20'>
                <h1 className='text-center text-3xl p-10 font-semibold'>Order Summary</h1>
                <div className='bg-white'>
                    <div className='mt-5 w-[80%] mx-auto py-5 rounded-lg flex items-center justify-between bg-amber-300 px-10'>
                        <div class="avatar">
                            <div class="w-32 rounded-full">
                                <img src={picture} alt='#' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='text-lg'>{name}</p>
                            <p className='text-xl text-red-500 font-semibold'>${price}</p>
                        </div>
                        <div className='text-2xl'>
                            <button onClick={quantityMinus} className='mr-3'>-</button>
                            <span>{quantity}</span>
                            <button onClick={quantityPlus} className='ml-3'>+</button>
                        </div>
                    </div>
                    <div className='flex justify-between px-20 mt-10'>
                        <p className='text-center text-lg pb-10'>Total Price</p>
                        <p className='text-center text-lg pb-10 text-red-500 font-semibold'>${totalPrice}</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Buy;