import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiTwotoneHeart, AiOutlineEye } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../../HomeSection/Style/ProductStyle.css'
import useProductDetails from '../../../Hooks/useProductDetails';
import { useState } from 'react';
import axios from 'axios';
import auth from '../../../firebase.init';
import { data } from 'autoprefixer';
import useCart from '../../../Hooks/useCart';
import ProductModal from '../../modal/ProductModal';




const Product = ({ product, itemDetails, setItemDetails, getProductDetails }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // const [cartItems] = useCart()
    const { picture, price, _id } = product;
    const [cartItemsss, setCartItemsss] = useCart();
    const [isAvailable, setIsAvailable] = useState([])
    const [love, setLove] = useState(false)


    const handelLOve = () => {
        if (user) {
            setLove(true)
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        setIsAvailable(cartItemsss.map(pd => pd._id))
    }, [cartItemsss])

    const addCart = (id) => {
        if (!user) {
            navigate('/login')
        } else {
            const email = user?.email
            const cartInfo = { email, product };
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartInfo),
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.acknowledged == true) {
                        alert('Product added')
                        setIsAvailable([...isAvailable, id])
                    }
                })
        }

    }


    return (
        <>
            <div class="rounded-none max-w-lg bg-base-100 shadow-xl card">
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
                        {
                            love ? <AiTwotoneHeart className='text-white text-2xl ml-2 hover:text-red-600'></AiTwotoneHeart> : <AiOutlineHeart onClick={() => handelLOve()} className='text-white text-2xl ml-2 hover:text-red-600'></AiOutlineHeart>
                        }
                    </div>
                    <div>
                        {isAvailable.includes(_id) ? <div className="">
                            <span className='text-warning text-lg font-semibold'>Go to cart</span>
                            <button onClick={() => navigate('/cart')} className='btn hover:bg-warning hover:text-black hover:ml-2 rounded-none bg-black border-none text-lg text-warning font-semibold'>
                                <AiOutlineArrowRight />
                            </button>
                        </div>


                            : <div className="">
                                <span className='text-warning text-lg font-semibold'>Add to cart</span>
                                <button onClick={() => addCart(_id)} className='btn hover:bg-warning hover:text-black hover:ml-2 rounded-none bg-black border-none text-2xl text-warning font-semibold'>+</button>
                            </div>}

                    </div>
                </div>
            </div>


        </>
    );
};

export default Product;