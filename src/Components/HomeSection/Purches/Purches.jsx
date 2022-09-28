import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useProductDetails from '../../../Hooks/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purches = () => {
    const { user } = useAuthState
    const [item] = useProductDetails()
    const navigate = useNavigate()

    const { picture, name, price, description } = item;

    const handelSubmit = (e) => {
        e.preventDefault()
        const quantity = e.target.quantity.value;
        const cartItem = {item, quantity, user}

        const url = `http://localhost:5000/carts`
        if(quantity > 0) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged == true) {
                    alert('Product added')
                    navigate('/cart')
                } else {
                    alert('Not added')
                }
            })
        } else {alert('Quantity decrease does not possible')}
    } 


    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-20 gap-10 py-10 h-screen bg-white'>
            <div className='w-[80%]'>
                <img className='bg-base-200 w-full' src={picture} alt="" />
            </div>

            <div>
                <h1 className='text-5xl mt-14'>{name}</h1>
                <p className='mt-7 text-lg'>{description}</p>
                <p type='text' className='text-3xl font-semibold text-red-500 mt-5 '>${price}</p>
                <form onSubmit={handelSubmit} className=''>
                    <span className='text-xl font-semibold mr-5'>Quantity:</span>
                    <input name='quantity' className='bg-gray-200 w-14 my-5 h-12 text-xl text-center text-red-500 font-semibold' type="number"  /> <br />
                    <button className='btn hover:bg-orange-600 bg-orange-400 border-0 rounded-none px-6'><AiOutlineShoppingCart className='text-lg mr-1'></AiOutlineShoppingCart> Add to cart</button>
                    {/* <button onClick={() => navigate(`/buy/${productId}`)} className='btn bg-orange-500 border-0 rounded-none px-5'><GiElectric className='text-lg'></GiElectric> Buy now</button> */}
                </form>
            </div>
        </div>
    );
};

export default Purches;