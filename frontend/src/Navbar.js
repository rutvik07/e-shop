import React from 'react';
import {Navbar, Nav,Image} from 'react-bootstrap';
// import logo from './logo-og.png'



const navbar = ()=>{
    const style = {
        backgroundColor : 'black',
        
    }

    return(
        <React.Fragment>
            <Navbar style= {style}>
            {/* <Nav.Link href='Categories'>Categories</Nav.Link> */}
            {/* <Nav.Link href='Filter'>Filter</Nav.Link> */}
            {/* <Nav.Link className="navbar-brand" href='#'><Image className="logo" src={logo}></Image></Nav.Link> */}
            <Nav.Link className="nav-item1" href='AllProducts'>Products</Nav.Link>
            {/* <Nav.Link href='Productdetails'>Productdetails</Nav.Link> */}
            <Nav.Link href='CategoriesForm'>CategoryForm</Nav.Link>
            <Nav.Link href='ProductForm'>ProductForm</Nav.Link>
            <Nav.Link className="nav-shop" href='Shop'>Shop</Nav.Link>
            <Nav.Link className="nav-login"  href='UserForm'>Login</Nav.Link>
            {/* <Nav.Link  href='Logout'>Logout</Nav.Link> */}
            {/* <Nav.Link href='UserCreate'>Sign Up</Nav.Link> */}
            </Navbar>
        </React.Fragment>
        
    )
};

export default navbar;