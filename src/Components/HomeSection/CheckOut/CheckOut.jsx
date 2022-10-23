import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckOut = () => {
    const [countries, setCountries] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [allData, setAllData] = useState([])
    const [products, setProducts] = useState()
    const [subTotals, setSubTotals] = useState()
    const [total, setTotal] = useState()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                const allCountry = data.map(c => c?.name?.common)
                // console.log(allCountry);
                setCountries(
                    allCountry.slice(0, 50)
                )
            })
    }, [])

    useEffect(() => {
        const url = `http://localhost:5000/checkOuts/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllData(data[0].checkOutsInfo.cartItemsUpdate)
                setTotal(data[0].checkOutsInfo.subTotal_amount)
                console.log(data[0].checkOutsInfo.subTotal_amount)
            })

    }, [email])
    return (
        <form className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10 px-14 gap-10'>
            <div className='p-10'>
                <div className='flex'>
                    <div>
                        <span className="label-text text-lg">First Name</span>
                        <input type="text" placeholder="Type here" className="rounded-none input input-bordered  w-full max-w-xs" />
                    </div>
                    <div className='ml-5'>
                        <span className="label-text text-lg">Last Name</span>
                        <input type="text" placeholder="Type here" className="rounded-none input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='my-5'>
                    <p className="label-text text-lg">Company name (optional)</p>
                    <input type="text" placeholder="Type here" className="rounded-none input input-bordered w-full" />
                </div>
                <label for="cars">Country / Region</label>
                <select className="input input-bordered w-full mb-5" id="cars" name="cars">
                    {
                        countries.map(one => <option>{one}</option>)
                    }
                </select>
                <label className='' htmlFor="">Street address</label>
                <input type="text" placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Town / City</label>
                <input type="text" placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Postcode</label>
                <input type="text" placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Phone</label>
                <input type="text" placeholder="House number and street name" className="rounded-none input input-bordered w-full mb-5" />
                <label className='' htmlFor="">Email address</label>
                <input type="text" placeholder="House number and street name" className="rounded-none input input-bordered w-full" />
            </div>
            <div className='p-10 shadow-xl'>
                <h2 className='text-3xl font-bold'>Your order</h2>
                <div className='overflow x-auto'>
                    <table className=' w-full mt-10'>
                        <thead className=''>
                            <tr className='text-center flex justify-between'>
                                <th className='font-bold'>Product</th>
                                <th className='font-bold'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map(data => <tr className='flex justify-between'>
                                    <td>{data?.name} x {parseInt(data.quantity)}</td>
                                    <td>{data.price * data.quantity}</td>
                                </tr>)
                            }
                            <tr className='flex justify-between'>
                                <td>Total</td>
                                <td>{total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    );
};

export default CheckOut;