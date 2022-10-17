import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import CartRaw from './CartRaw';
import TotalSection from './TotalSection';
import { BsChevronDoubleLeft } from "react-icons/bs";

const Cart = () => {
  const [cartItems] = useCart()

  const getTotal = (subTotals) => {
    const totalPrice = subTotals + subTotals;
    // console.log(totalPrice);
    return totalPrice;
  }
  
  return (
    <section className='px-5'>
      <Link className='flex items-center mt-5' to='/home'>
        <BsChevronDoubleLeft></BsChevronDoubleLeft><p className='text-lg'>Home</p>
      </Link>
      <h1 className='font-bold text-4xl ml-10 mt-10'>Cart</h1>
      <div className="grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-flow-row gap-10 mt-5">
        <div class="overflow-x-auto lg:col-span-2 md:col-span-2 pb-10">
          <table class="table w-full">
            <thead className=''>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map((cartItem, index) => <CartRaw key={cartItem._id} cartItem={cartItem} getTotal={getTotal}></CartRaw>)
              }
            </tbody>
          </table>
          <div className='text-center mt-5'>
            <button onClick={getTotal} className='btn btn-warning rounded-none'>Update cart</button>
          </div>
        </div>
        <div>
          <div id='totalBox' className='lg:col-span-1 md:col-span-1 w-full max-h-80 rounded-none h-[400px]'>
            <TotalSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;