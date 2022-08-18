import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;