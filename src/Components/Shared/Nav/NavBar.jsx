import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Home from '../../HomeSection/Home/Home';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';

const NavBar = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menu = <>
        <li className='b'><Link to='/'>Home</Link></li>
        {/* {user && <li><Link to='/dashBoard'>Dashboard</Link></li>} */}
        <li className='b'><Link to='#'>About</Link></li>
        <li className='b'><Link to='#'>Contact</Link></li>
        <li className='b'>{user ? <Link to='/signUp' onClick={logout}>Log out</Link> : <Link to='/signUp'>Sign Up</Link>}</li>
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <div class="w-full navbar bg-yellow-400 lg:px-12 sticky top-0 z-50">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-1">
                            <Link to='/' class="btn btn-ghost normal-case logo">
                                <span className='lg:text-4xl sm:text-xl'>P</span><sub className='lg:text-xl sm:text-lg'>OWERX</sub>
                            </Link>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {menu}
                            </ul>
                        </div>
                        {
                            user ? <div class="navbar-end">
                            <ul className='menu menu-horizontal p-0'>
                                <li className='b'>
                                    <Link to='#' className='dropdown dropdown-hover lg:text-2xl sm:text-xl lg:mr-5 sm:mr-2'>
                                        <AiOutlineUser tabIndex={0}></AiOutlineUser>
                                        <div className="">
                                            <ul tabIndex={0} className="dropdown-content mt-5 menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='#'>My Profile</Link></li>
                                                <li><Link to='#'>Orders</Link></li>
                                            </ul>
                                        </div>
                                    </Link>
                                </li>
                                <li className='b'>
                                    <Link to='#' className='lg:text-2xl sm:text-xl lg:mr-5 sm:mr-2'>
                                        <BsHeart></BsHeart>
                                    </Link>
                                </li>
                                <li className='b'>
                                    <Link to='/cart' className='lg:text-2xl sm:text-xl'>
                                        <BsHandbag></BsHandbag>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        : ''
                        }
                    </div>
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 text-white bg-black">
                        {menu}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default NavBar;