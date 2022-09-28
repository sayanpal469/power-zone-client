import React from 'react';

const CartRaw = ({ cartItem, count }) => {
    //console.log(cartItem);
    const { quantity } = cartItem;
    const { name, picture, _id } = cartItem?.item;

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
            <th>{count + 1}</th>
            <td>
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={ () => handelDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default CartRaw;