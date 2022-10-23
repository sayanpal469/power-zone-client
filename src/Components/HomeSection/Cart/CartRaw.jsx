import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartRaw = ({
  cartItem,
  handelDelete,
  getTotal,
  setCartItems,
  settotal_amount,
}) => {
  const { name, picture, _id, price, quantity: backQuan } = cartItem;
  const [subTotal, setSubTotal] = useState(price);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(backQuan)
  }, [cartItem])

  const getSubTotal = (e) => {
    let quantity = e.target.value;
    setSubTotal(price * quantity);
  };

  const handleUpdateAmount = (e, name, id) => {
    setQuantity(e.target.value);
    getTotal(id, e.target.value);
  };
  return (
    <tr className="hover">
      <td className="py-14">
        <AiOutlineCloseCircle
          className="text-xl"
          onClick={() => {
            handelDelete(_id);
          }}
        ></AiOutlineCloseCircle>
      </td>
      <td className="py-14">
        <div class="avatar">
          <div class="mask mask-squircle w-24 h-16">
            <img src={picture} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="font-semibold text-xl">${price}</td>
      <td>
        <input
          onChange={(e) => handleUpdateAmount(e, name, _id)}
          value={quantity}
          name={name}
          className="bg-slate-200 w-10 h-10 text-center"
          type="number"
        />
      </td>
      <td className="text-xl font-semibold">{price * quantity}</td>
    </tr>
  );
};

export default CartRaw;
