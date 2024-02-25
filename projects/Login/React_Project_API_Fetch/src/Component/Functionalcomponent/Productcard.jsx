import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


const Productcard = ({ product }) => {
    console.log("product:", product);
    const [showFullText, setShowFullText] = useState(false);
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (

        <div className="d-flex justify-content-between align-items-stretch mt-3">
            <MDBCard className="p-2 w-auto">
                <MDBCardImage className="imgg" src={product.image} position='top' alt='...' />
                {/* <p>ID:{product.id}</p> */}
                <MDBCardBody>
                    <MDBCardTitle className="text-truncate">{product.title}</MDBCardTitle>
                    <MDBCardText>
                        {/* {product.description} */}
                        {showFullText ? product.description : `${product.description.slice(0, 100)}`}
                        {product.description.length > 100 && (
                            <span className="text-primary" role="button" onClick={toggleText}>
                                {showFullText ? 'Read Less' : 'Read More'}
                            </span>
                        )}
                    </MDBCardText>
                    <MDBCardText>
                        {product.body}
                    </MDBCardText>
                    <p>Price: ${product.price}</p>
                    <p>Rate: {product.rating.rate}</p>
                    <p>Count: {product.rating.count}</p>
                    <button className="btn btn-primary d-block mx-auto" href='#' >Add Product</button>

                </MDBCardBody>
            </MDBCard >
        </div>
    );
};

export default Productcard;