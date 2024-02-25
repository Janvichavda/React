// import React, { Component } from 'react';
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn
// } from 'mdb-react-ui-kit';

// const CustomCard = (props) => {
//     return (
//         <>
//             <MDBCard>
//                 <MDBCardImage src={props.image} position='top' alt='...' />
//                 <MDBCardBody>
//                     <MDBCardTitle>{props.title}</MDBCardTitle>
//                     <MDBCardText>
//                         {props.description}
//                     </MDBCardText>
//                     <p>Price:${props.price}</p>
//                     <p>Rate:{props.rating}</p>
//                     {/* <p>{props.rating}</p> */}
//                     <MDBBtn href='#'>Button</MDBBtn>
//                 </MDBCardBody>
//             </MDBCard>
//         </>
//     );
// };

// export default CustomCard;

// import React from 'react';
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn
// } from 'mdb-react-ui-kit';

// const CustomCard = ({ title, image, description, price, rating }) => {
//     return (
//         <MDBCard>
//             <MDBCardImage src={image} position='top' alt='...' />
//             <MDBCardBody>
//                 <MDBCardTitle>{title}</MDBCardTitle>
//                 <MDBCardText>
//                     {description}
//                 </MDBCardText>
//                 <p>Price: ${price}</p>
//                 <p>Rate: {rating}</p>
//                 <MDBBtn href='#'>Button</MDBBtn>
//             </MDBCardBody>
//         </MDBCard>
//     );
// };

// export default CustomCard;

import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const CustomCard = ({ product }) => {
    console.log("CustomCard ~ product:", product)
    // const { title, image, description, price, rating } = product;

    return (
        <MDBCard>
            <MDBCardImage src={product.image} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText className="text-truncate">
                    {product.description}
                </MDBCardText>
                <p>Price: ${product.price}</p>
                {/* <p>Rate: {product.rate}</p> */}
                <MDBBtn href='#'>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
};

export default CustomCard;
