import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])

    useEffect( () => {
        const url = `http://localhost:5000/orders/${user?.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return [orders]
};

export default useOrders;