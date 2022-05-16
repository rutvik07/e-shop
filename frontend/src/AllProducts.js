import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './App.css';


const AllProducts = (props) => {

    const [products, setProducts] = useState([]);

    const [imageBasePath, setImageBasePath] = useState('');

    useEffect(() => {
        fetch('http://localhost:9000/product/pro-list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.data);
            setProducts(data.data);
            setImageBasePath(data.imageBaseUrl);
        })

    },[])

    

    

    return (

        <React.Fragment>
            <h1>Product Section</h1>
            <Container>
                <Row>
                    {products.map((product) => {
                        return (
                            <Col md={4} className="my-3">
                                <div class="card">

                                    <Image src={imageBasePath + product.file} className="img-fluid pro-img" alt="..." />


                                    <div class="card-body">
                                        <h4>Name:{product.name}</h4>
                                        <h4>Price:Rs{product.price}</h4>
                                        <h4>Category:{product.category.name}</h4>
                                        <h4>Quantity:{product.quantity}</h4>
                                        <h4>Description:{product.description}</h4>
                                    </div>
                                </div>
                            </Col>
                        )

                    })}
                </Row>


            </Container>

        </React.Fragment>
    )
}

export default AllProducts;