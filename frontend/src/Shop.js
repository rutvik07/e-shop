import React, { useState, useEffect } from 'react'
import Categories from './categories';
import Product from './Product';
import { Row, Col, Container } from 'react-bootstrap';
import Filter from './Filter';

function Shop() {

    const [categoryid, setCategoryId] = useState([]);
    const [sortby, setSortBy] = useState();
    
    useEffect(() => {
        setCategoryId(categoryid);
    }, [categoryid])
    
    useEffect(() => {
        setSortBy(sortby);
    }, [sortby])

    return (
        <React.Fragment>
            <Container>
                <Row className="mt-5">
                    <Col md={2}>
                        <Categories setCategoryId={setCategoryId} categoryid={categoryid} />
                        <Filter setSortBy={setSortBy}/>
                    </Col>

                    <Col md={10}>
                        <Product value={{categoryid:categoryid,sortby:sortby}} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Shop
