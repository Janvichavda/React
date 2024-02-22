import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, } from 'mdb-react-ui-kit';
import axios from 'axios';
import Sidenavbar from '../components/Sidenavbar';


const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input fields
        if (!name || !price || !category) {
            setError('Please fill in all fields.');
            return;
        }

        setLoading(true);

        const formData = {
            name,
            price: parseFloat(price),
            category,
            // image: image ? image.name : null,
            image: image ? await convertImageToBase64(image) : null,

        };

        try {
            const response = await axios.post('http://localhost:5000/products', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Product created successfully:', response.data);
            setName('');
            setPrice('');
            setCategory('');
            setImage(null);
            setError(null);
        } catch (error) {
            console.error('Error creating product:', error);
            setError('Error creating product. Please try again.');
        } finally {
            setLoading(false);
        }
    };



    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <>

            {/* <Sidenavbar /> */}

            <MDBContainer>
                <MDBRow className="">
                    <MDBCol md="6" className='m-auto'>
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={handleSubmit}>
                                    <p className="h4 text-center mb-4">Add Product</p>

                                    {error && <p color="danger">{error}</p>}

                                    <MDBInput
                                        wrapperClass="mb-4 w-100 "
                                        label="Name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <MDBInput
                                        wrapperClass="mb-4 w-100 "
                                        label="Price"
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <MDBInput
                                        wrapperClass="mb-4 w-100 "
                                        label="Category"
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <MDBInput
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                    <div className="text-center mt-4">
                                        <MDBBtn type="submit" disabled={loading}>
                                            {loading ? 'Adding Product...' : 'Add Product'}
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default ProductForm;
