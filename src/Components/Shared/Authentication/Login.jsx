import React from 'react';
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 items-center gap-20 px-20">
            <div>
                <img src="https://i.ibb.co/qDyMbbz/login.jpg" alt="" />
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl font-bold text-center'>Log in</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <div className='flex justify-between'>
                            <label class="label">
                                <Link to='/signUp' class="label-text-alt link link-hover">Create an account?</Link>
                            </label>
                            <label class="label">
                                <Link to="#" class="label-text-alt link link-hover">Forgot Password</Link>
                            </label>
                        </div>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-warning">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <div class="form-control ">
                        <button
                            className="btn btn-outline"
                        ><FcGoogle className='text-4xl'
                        ></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;