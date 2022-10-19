import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/carts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data.map((ci) => ci.product)));
  }, [user]);

  return [cartItems, setCartItems];
};

export default useCart;