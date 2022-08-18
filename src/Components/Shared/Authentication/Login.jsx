import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(
        auth
    );
    const navigate = useNavigate()

    if (loading || Gloading) {
        return <Loading/>
    }
    if(user || Guser) {
        navigate('/home')
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 items-center gap-20 px-20">
            <div>
                <img src="https://i.ibb.co/qDyMbbz/login.jpg" alt="" />
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelSubmit} class="card-body">
                    <h1 className='text-2xl font-bold text-center'>Log in</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" class="input input-bordered" />
                        <div className='flex justify-between'>
                            <label class="label">
                                <Link to='/signUp' class="label-text-alt link link-hover">Create an account?</Link>
                            </label>
                            <label class="label">
                                <Link to="#" class="label-text-alt link link-hover">Forgot Password</Link>
                            </label>
                        </div>
                    </div>
                    {error && <p className='text-center text-red-500 font-bold'>{error.message}</p>}
                    <div class="form-control mt-6">
                        <button class="btn btn-warning">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <div class="form-control ">
                        <button
                        onClick={() => signInWithGoogle()}
                            className="btn btn-outline"
                        ><FcGoogle className='text-4xl'
                        ></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;