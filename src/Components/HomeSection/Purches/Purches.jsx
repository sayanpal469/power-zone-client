import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purches = () => {
    const {productId} = useParams()
    const [item, setItem] = useState({})

    useEffect( () => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    },[])
    return (
        <div className='grid lg:grid-cols-2'>
            <div>
                <img src={item.picture} alt="" />
            </div>
        </div>
    );
};

export default Purches;