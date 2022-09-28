import React from 'react';
import useOrders from '../../../../Hooks/useOrders';
import MyOrderRaw from './MyOrderRaw';

const MyOrders = () => {
    const [orders] = useOrders([]);
    return (
        <div class="overflow-x-auto mt-5">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Payment</th>
                        <th>Pending Status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <MyOrderRaw index={index} key={order._id} order={order}></MyOrderRaw>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;