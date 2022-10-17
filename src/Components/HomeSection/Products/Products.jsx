import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='my-32'>
            <h3 className='text-center mt-16 mb-2'>SHOP OUR NEW RELEASES</h3>
            <h1 className='text-center text-4xl font-bold uppercase'>Our <span className='text-yellow-400'>Products</span></h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:px-20 md:px-16 sm:px-10 mt-16'>
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>``
        </div >
    );
};

export default Products;