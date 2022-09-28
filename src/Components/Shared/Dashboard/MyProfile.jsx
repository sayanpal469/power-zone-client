import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className='max-w-lg py-10 text-center px-10 my-10 bg-white  mx-auto shadow-2xl rounded-lg'>
            <div>
                <div class="avatar">
                    <div class="w-36 rounded-full">
                        <img src={user?.photoURL}  alt='#'/>
                    </div>
                </div> <br />
            </div>
            <h1 className='text-lg mt-10'>Name-{user?.displayName}</h1>
            <h1 className='text-lg mt-5'>Email-{user?.email}</h1>
            <button className='btn btn-warning mt-5'>Update</button>

        </div>
    );
};

export default MyProfile;