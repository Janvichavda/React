import React, { useEffect, useState } from 'react';
import Productcard from './Productcard';
import Placeholder from '../Common/Placeholder';

const Apifetch = () => {
    const [products, setProducts] = useState([]);
    const [loader, setloader] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${ response.status}');
                }
                // console.log("response:", await response.json())
                const data = await response.json();
                console.log("data:", data)
                // console.log("response.json():", response.json())
                setProducts(data);
                setloader(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount
    return (
        <div className="container">
            <div className="row justify-content-center gy-4">
                {
                    (loader) ? products.map((product) => (
                        <div key={product.id} className='col-lg-4 col-md-6 col-12'>
                            <Productcard product={product} />
                        </div>
                    )) : <Placeholder />}

            </div>
        </div>

    );
};
export default Apifetch;