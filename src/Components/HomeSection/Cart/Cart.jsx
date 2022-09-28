import React, { useState } from 'react';
import { useEffect } from 'react';
import CartRaw from './CartRaw';

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/carts`)
    .then(res => res.json())
    .then(data => setCartItems(data))
  },[cartItems])

  return (
    <div className="grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-flow-row px-5 mt-10 gap-10">
      <div class="overflow-x-auto lg:col-span-2 md:col-span-2 pb-10">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((cartItem, index) => <CartRaw key={cartItem._id} cartItem={cartItem} count={index}></CartRaw>)
            }
          </tbody>
        </table>
      </div>
      <div className='lg:col-span-1 md:col-span-1 w-full bg-amber-500 max-h-80 rounded-md shadow-2xl'></div>
    </div>
  );
};

export default Cart;