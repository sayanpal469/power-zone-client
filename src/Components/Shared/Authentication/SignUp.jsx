import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passError, setPassError] = useState();
    let signUpError;

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    if (loading || Gloading) {
        return <Loading />
    }

    if (Guser || user) {
        navigate(from, {replace: true});
    }


    const handelConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password < 6) {
            setPassError('minimum 6 charecter')
        }
        else if (password !== confirmPassword) {
            setPassError("Password did't match")
        } else {
            createUserWithEmailAndPassword(email, password);
        }
    }

    
    if(error || Gerror || passError) {
        signUpError = <p className='text-center text-red-500 font-bold'>{error?.message || Gerror?.message || passError}</p>
    }


    return (
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-14 items-center gap-20 px-20">
            <div>
                <img src="https://i.ibb.co/Jq01mJR/signUp.jpg" alt="" />
            </div>
            <form onSubmit={handelSubmit} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" class="input input-bordered" />
                    </div>
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
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input onBlur={handelConfirmPassword} name='confirmPassword' type="password" placeholder="Confirm your password" class="input input-bordered" />
                        <div className='flex justify-between'>
                            <label class="label">
                                <Link to='#' class="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                            <label class="label">
                                <Link to="/login" class="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </div>
                    </div>
                    <p className='text-center text-red-500'>{passError}</p>
                    {signUpError}
                    <div class="form-control mt-6">
                        <button class="btn btn-warning">Sign up</button>
                    </div>
                    <div className="divider">OR</div>
                    <div class="form-control ">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline"><FcGoogle className='text-4xl'></FcGoogle>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;