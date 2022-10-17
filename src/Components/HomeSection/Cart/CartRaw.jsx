import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CartRaw = ({ cartItem, getTotal }) => {
    const { name, picture, _id, price, quantity } = cartItem.product;
    const [subTotal, setSubTotal] = useState(price)
    // const [quantity, setQuantity] = useState(1)


    const getSubTotal = (e) => {
        let quantity = e.target.value;
        setSubTotal(price * quantity)
    }

    getTotal(subTotal)

    const handelDelete = (id) => {
        const url = `http://localhost:5000/carts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <tr>
            <td className='py-14'>
                <AiOutlineCloseCircle className='text-xl' onClick={() => { handelDelete(_id) }}></AiOutlineCloseCircle>
            </td>
            <td className='py-14'>
                <div class="avatar">
                    <div class="mask mask-squircle w-24 h-16">
                        <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td className='font-semibold text-xl'>${price}</td>
            <td>
                <input onChange={getSubTotal} value={quantity} className='bg-slate-200 w-10 h-10 text-center' type="number" />
            </td>
            <td className='text-xl font-semibold'>
                ${subTotal}
            </td>
        </tr>
    );
};

export default CartRaw;