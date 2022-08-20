import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductDetails = () => {
    const { productId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                //console.log(data);
            })
    }, [])

    return [item, setItem]
};

export default useProductDetails;