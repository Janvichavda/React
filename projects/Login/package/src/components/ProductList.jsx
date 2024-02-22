import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                setProducts(data); // Assuming the response is an array of products
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that this effect runs only once on component mount

    return (
        <>
            <section className='py-5'>
                <MDBContainer>
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-3  " key={product.id}>
                                <div className="card p-2">
                                    <img className="product-image w-100" src={product.image} alt="img" />
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                    <div className="d-flex align-items-center justify-content-between mt-auto">
                                        <p className="m-0">Price: {product.price}</p>
                                        <button className="btn">
                                            {product.isLiked ? (
                                                <i
                                                    className="fa-solid fa-heart fa-2x d-block m-0"
                                                    style={{ color: '#dc3545' }}
                                                ></i>
                                            ) : (
                                                <i className="fa-regular fa-heart fa-2x d-block m-0 "></i>
                                            )}
                                        </button>
                                        <button className="btn">
                                            <i className="fa-solid fa-eye fa-2x d-block m-0"></i>
                                        </button>

                                        <button className="btn"><i className="fa-solid fa-2x fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </MDBContainer>
            </section>
        </>
    );
};

export default ProductList;
