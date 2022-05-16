import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './App.css';


const FirstComponent = (props) => {

    const [products, setProducts] = useState([]);

    const [imageBasePath, setImageBasePath] = useState('');

    useEffect(() => {
        fetch('http://localhost:9000/product/product-list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({ cateId: props.value.categoryid, sortby: props.value.sortby })

        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.data);
            setProducts(data.data);
            setImageBasePath(data.imageBaseUrl);
        })

    },[props.value])

    

    

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

export default FirstComponent;