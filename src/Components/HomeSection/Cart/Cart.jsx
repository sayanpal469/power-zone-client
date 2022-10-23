import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import CartRaw from "./CartRaw";
import TotalSection from "./TotalSection";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useCart();
  const [cartItemsUpdate, setCartItemsUpdate] = useState([]);
  const [subTotal_amount, setsubTotal_amount] = useState(0);

  useEffect(() => {
    setCartItemsUpdate(cartItems);
  }, [cartItems])

  useEffect(() => {
    const sum = cartItemsUpdate.map(item => item.price * item.quantity).reduce((partialSum, a) => partialSum + a, 0);
    setsubTotal_amount(sum);
  }, [cartItemsUpdate])

  const getTotal = (id, quantity) => {
    // console.log(id, quantity);
    setCartItemsUpdate(
      cartItemsUpdate.map((pd) =>
        pd._id == id ? { ...pd, quantity: quantity } : pd
      )
    );
  };

  const handelDelete = (id) => {
    const url = `http://localhost:5000/carts/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItemsUpdate(cartItemsUpdate.filter((pd) => pd._id !== id));
      });
  };


  // console.log(cartItemsUpdate.map(item => ({ name: item.name, quantity: item.quantity })))
  return (
    <section className="px-5">
      <Link className="flex items-center mt-5" to="/home">
        <BsChevronDoubleLeft></BsChevronDoubleLeft>
        <p className="text-lg">Home</p>
      </Link>
      <h1 className="font-bold text-4xl ml-10 mt-10">Cart</h1>
      <div className="grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-flow-row gap-10 mt-5">
        <div class="overflow-x-auto lg:col-span-2 md:col-span-2 pb-10">
          <table class="table w-full">
            <thead className="">
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItemsUpdate.map((cartItem, index) => (
                <CartRaw
                  handelDelete={handelDelete}
                  getTotal={getTotal}
                  setCartItems={setCartItems}
                  key={cartItem._id}
                  cartItem={cartItem}
                ></CartRaw>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-5">
          </div>
        </div>
        <div>
          <div
            id="totalBox"
            className="lg:col-span-1 md:col-span-1 w-full max-h-80 rounded-none h-[400px]"
          >
            <TotalSection setCartItems={setCartItems} cartItemsUpdate={cartItemsUpdate} subTotal_amount={subTotal_amount} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
