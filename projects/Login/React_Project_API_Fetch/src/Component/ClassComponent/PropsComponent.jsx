import React, { Component } from 'react';
import CustomCard from "./CustomCard";

class PropsClassComponentInReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
        };
    }

    componentDidMount() {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => this.setState({ productData: data }))
            .catch(error => console.error('Error fetching data:', error));
    }

    render() {
        const { productData } = this.state;
        var name = { firstname: "janvi" }
        console.log(name.firstname)
        console.log("PropsClassComponentInReact ~ render ~ name:", name)
        return (
            <>
                <div className="row">
                    {productData.map((product) => (
                        <div key={product} className="col-3">
                            <CustomCard
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                rating={product.rating.rate}
                            />
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default PropsClassComponentInReact;
