import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({product}) => {
    const navigate = useNavigate()
    const {picture, price, _id} = product

    const buyProducts = () => {
        navigate(`/purches/${_id}`)
    }
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-red-500 font-semibold text-xl text-center mb-2">${price}</h2>
                <div class="card-actions justify-center">
                    <button onClick={buyProducts} class="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;