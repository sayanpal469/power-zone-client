import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import './Nav.css'

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menu = <>
    <li className='b'><Link to='/'>Home</Link></li>
    {/* {user && <li><Link to='/dashBoard'>Dashboard</Link></li>} */}
    <li className='b'><Link to='#'>Blog</Link></li>
    <li className='b'><Link to='#'>Contact</Link></li>
    <li className='b'>{user ? <Link to='/signUp' onClick={logout}>Log out</Link> : <Link to='/signUp'>Sign Up</Link>}</li>

  </>
  return (
    <div className='sticky top-0 z-50'>
      <div class="navbar lg:px-12  bg-yellow-400">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
            </ul>
          </div>
          <Link to='/' class="btn btn-ghost normal-case logo">
            <span className='lg:text-4xl sm:text-xl'>P</span><sub className='lg:text-xl sm:text-lg'>OWERX</sub>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
        <div class="navbar-end">
          <ul className='menu menu-horizontal p-0'>
            <li className='b'>
              <Link to='#' className='lg:text-2xl sm:text-xl lg:mr-5 sm:mr-2'>
                <AiOutlineUser></AiOutlineUser>
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
      </div>
    </div>
  );
};

export default Nav;