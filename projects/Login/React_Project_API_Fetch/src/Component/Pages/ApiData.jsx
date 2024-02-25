// import React, { useEffect, useState } from 'react';

// const APIExample = () => {
//     const [ProData, setProdData] = useState({});
//     useEffect(() => {
//         FetchData()
//     })
//     const FetchData = async () => {
//         await fetch("https://fakestoreapi.com/products").then((apijson) => apijson.json()).then((responseData) => {
//             console.log(responseData);
//             let ProductList = ""
//             responseData.map((data) => {
//                 ProductList += <>{data.data}</>
//             })
//             console.log(ProductList);
//             setProdData(ProductList)
//         })
//     }
//     return (
//         <> {JSON.stringify(ProData)}  </>
//     );
// };

// export default APIExample;
import React, { useEffect, useState } from 'react';
import Productcard from '../Functionalcomponent/Productcard';

const Apifetch = () => {
    const [products, setProducts] = useState([]);
    const [loader, setloader] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // console.log("response:", await response.json())
                const data = await response.json();
                console.log("data:", data)
                // console.log("response.json():", response.json())
                setProducts(data);
                setloader(true);
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
                    )) : <>
                        <p class="row justify-content-between gx-2 placeholder-glow m-5">
                            <div className="col-3">
                                <div class="card" aria-hidden="true">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="card" aria-hidden="true">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div class="card" aria-hidden="true">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </>
                }
                { }

            </div>
        </div>

    );
};
export default Apifetch;