import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import '../../HomeSection/Style/ProductStyle.css'
import useProductDetails from '../../../Hooks/useProductDetails';
import { useState } from 'react';
import axios from 'axios';
import auth from '../../../firebase.init';
import { data } from 'autoprefixer';
import useCart from '../../../Hooks/useCart';


const Product = ({ product }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [cartItems] = useCart()
    const { picture, price, _id } = product;
    const [itemDetails, setItemDetails] = useState({});
    const [goCart, setGocart] = useState(false)

    // useEffect( () => {
    //     cartItems.find(cart => cart.product._id == _id)
    //     setGocart(true)
    // },[cartItems])

    const addCart = () => {
        const email = user?.email
        const cartInfo = {email, product};

        fetch(`http://localhost:5000/carts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged == true) {
                alert('Product added')
                cartItems.find(cart => cart.product._id == _id)
        setGocart(true)
                // setGocart(true)
                // navigate(`/cart`)
            }
        })
    }

    const getProductDetails = async (id) => {
        // await fetch(`http://localhost:5000/products/${id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setItemDetails(data)
                
        //     })
        //     console.log(itemDetails);

        const res = await axios.get(`http://localhost:5000/products/${id}`)
        console.log(res.data)
        setItemDetails(res.data)
        // setToggle(!toggle)
    }

    return (
        <div class="rounded-none max-w-lg bg-base-100 shadow-xl card">
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        <img src='' alt="" />
                        <h1></h1>
                    </div>
                </div>
            </div>
            <img className='hover:bg-yellow-400 w-full transition' src={picture} alt="Shoes" />
            <div className='border-b-2 border-b-gray-200 w-full px-3 mt-2'>
                <p className='text-xs'>ENDURANCE & ENERGY, UNCATEGORIZED</p>
                <h2 className='font-semibold text-base mb-2'>Intelligent Wool Bottle</h2>
            </div>

            <div className='flex justify-between items-center cardBTM1'>
                <h2 className='font-semibold text-xl ml-5'>${price}</h2>
                <button className='btn btn-warning  rounded-none border-none text-2xl text-black font-semibold addCart'>+</button>
            </div>


            <div className='bg-black cardBTM2 text-white hover:text-warning'>
                <div className='flex items-center'>
                    <label onClick={() => getProductDetails(_id)} for="my-modal-3"><AiOutlineEye className='text-white text-2xl ml-2'></AiOutlineEye></label>
                    <AiOutlineHeart className='text-white text-2xl ml-2 hover:text-red-600'></AiOutlineHeart>
                </div>
                <div>
                    {goCart == true ? <span className='text-warning text-lg font-semibold'>Go to cart</span>
                    : 
                    <span className='text-warning text-lg font-semibold'>Add to cart</span>}
                    <button onClick={addCart} className='btn hover:bg-warning hover:text-black hover:ml-2 rounded-none bg-black border-none text-2xl text-warning font-semibold'>+</button>
                </div>
            </div>
        </div>
    );
};

export default Product;