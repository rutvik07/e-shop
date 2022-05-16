import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image, Form } from 'react-bootstrap';

const Categories = (props) => {

    const [categoryList, setCategoryList] = useState([]);





    useEffect(() => {
        fetch('http://localhost:9000/category/server-get-category', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        }).then(function (response) {
            return response.json();
        }).then(function (data) {

            setCategoryList(data.data);

        })

    }, [])

    const getCategoryId = (e) => {
        let isChecked = e.target.checked;
        if (isChecked) {
            props.setCategoryId([...props.categoryid,e.target.value]);
        } else 
        {
            const indexcat =props.categoryid;
            const index = indexcat.indexOf(e.target.value);
            
            indexcat.splice(index,1)
            props.setCategoryId([...props.categoryid]);
        }
    }
   

    return (

        <React.Fragment>
            <h1>Categories</h1>
            <Row>
                {categoryList.map((category,index) => {
                    return (
                        <Col>
                             <Form.Check 
                            label={category.name}
                            name="category"
                            type='checkbox'
                            value={category._id}
                            key={category._id}
                            id={`inline-${index}`}
                            onChange={getCategoryId}
                        />

                        </Col>

                    )
                })}
            </Row>



            {/* <Container>
                <Row>
                {products.map((product) => {
                    return (
                       <Col md={4} className="my-3"> 
                        <div class="card">
                            
                            <Image src={imageBasePath+product.file}  className="img-fluid pro-img" alt="..." />
                            

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


            </Container> */}
        </React.Fragment>
    )
}

export default Categories;