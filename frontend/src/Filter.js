import React from 'react';
import {Form} from 'react-bootstrap';

const Filter = (props) => {
    const onHandleChange = (e)=>{
        props.setSortBy(e.target.value);
    }
    
    return (

        <React.Fragment>
            <h3 className="filter-label">Filter Section</h3>
            <Form.Select onChange={onHandleChange}>
                <option selected>Price Range</option>
                <option value='1'>High to Low</option>
                <option value='-1'>Low to High</option>
            </Form.Select>
            

        </React.Fragment>
    )
}

export default Filter;