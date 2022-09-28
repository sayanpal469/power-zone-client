import React from 'react';

const MyOrderRaw = ({ order, index }) => {
    const { address, phone, pinCode, totalPrice, product, productImg, quantity, _id } = order;

    const handelDelete = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={productImg} alt='#' />
                    </div>
                </div>
            </td>
            <td>{product}</td>
            <td>${totalPrice}</td>
            <td>{quantity}</td>
            <td>
                <button className='btn btn-warning'>Pay Now</button>
            </td>
            <td>{product}</td>
            <td>
                <button onClick={() => handelDelete(_id)} className="btn btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default MyOrderRaw;