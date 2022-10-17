import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const useProductDetails = () => {
    // const { productId } = useParams()
    const [products, setProducts] = useState([])

    useEffect((id) => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                //console.log(data);
            })
    }, [])

    const productDetails = products.map(product => product)

    return productDetails
};

export default useProductDetails;