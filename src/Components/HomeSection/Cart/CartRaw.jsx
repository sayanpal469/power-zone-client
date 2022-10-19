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
    // const [quantity, setQuantity] = useState(backenQuantity);
    // const [total_amount, settotal_amount] = useState([]);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(backQuan)
    }, [cartItem])

    const getSubTotal = (e) => {
        let quantity = e.target.value;
        setSubTotal(price * quantity);
        // settotal_amount([...total_amount, { [e.target.name]: price * quantity }]);
    };
    // console.log(quantity)

    // console.log(cartItem);

    const handleUpdateAmount = (e, name, id) => {
        // const { name, value } = e.target;
        // console.log(e.target.value);
        // console.log(name, id);
        setQuantity(e.target.value);
        // console.log(e.target.value,name)
        getTotal(id, e.target.value);
        // getTotal(id, quantity);
        // settotal_amount([...total_amount, { id: id, value: price * quantity }]);
        // setCartItems([
        //   ...cartItem,
        //   { id: _id, name, quantity, price: price * quantity },
        // ]);
        // console.log(name, id);
        // setCartItems([...cartItem,{id}])
    };
    // console.log(total_amount);

    // console.log(cartItem.product);
    // useEffect(()=>{
    //   settotal_amount([...total_amount, { _id: price * quantity }]);
    //   console.log(total_amount);
    // },[quantity])
    return (
        <tr>
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