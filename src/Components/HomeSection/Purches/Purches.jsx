import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purches = () => {
    const {productId} = useParams()
    const [item, setItem] = useState({})

    useEffect( () => {
        const url = `http://localhost:3000/purches/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Purches;