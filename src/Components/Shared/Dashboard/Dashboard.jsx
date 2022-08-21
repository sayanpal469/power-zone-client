import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile bg-slate-100">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-12">
                <label for="my-drawer-2" class="btn btn-primary  drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu py-10 px-5 overflow-y-auto w-80 text-white bg-amber-400 pl-8">
                    <li><Link className='' to='/dashBoard'>
                        <FaUserAlt className='text-2xl'></FaUserAlt>
                    </Link></li>
                    <li><Link className='my-3' to='/dashBoard/myOrders'>My Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;