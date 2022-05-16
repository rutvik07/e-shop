import React,{useEffect,useState,useRef} from 'react';
import { Formik } from 'formik';
import {Form,Button} from 'react-bootstrap';
import './App.css';


const ProductForm = (props) => {
    
    const [category,setCategory] = useState([])
    
    const imgRef = useRef();

    console.log(imgRef.current);

    useEffect(()=>{
        fetch('http://localhost:9000/category/server-get-category',{
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                setCategory(data.data)
                console.log(data.data);
            })
                
    },[])
      
    
    return (

        <React.Fragment>
            <h1 className="pro-sec-label">Product Form</h1>
            <div>
            
            <Formik
            
            initialValues={{ name: '', description: '',price: '',quantity: '',file:'',category:''}}
            validate={values => {
                const errors = {};
                if (!values.name) {
                errors.name = 'Required';
                } 
                else if(!values.description){
                    errors.description = 'Required';
                }
                else if(!values.price){
                    errors.price = 'Required';
                }
                else if(!values.quantity){
                    errors.quantity = 'Required';
                }
                else if(!values.file){
                    errors.file = 'Required';
                }
                else if(!values.category){
                    errors.category = 'Required';
                }

                return errors;
            }}      
            onSubmit={(values, { setSubmitting }) => {

                var formData = new FormData()
                formData.append('name',values.name)
                formData.append('description',values.description)
                formData.append('category',values.category)
                formData.append('price',values.price)
                formData.append('quantity',values.quantity)
                formData.append('avatar',imgRef.current.files[0])

                // request.send(JSON.stringify({name:name,description:description,category:category,price:price,quantity:quantity,file:file}));
                



                 fetch('http://localhost:9000/product/add-product-data',{
                    method: 'POST',

                    body:formData
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                    
                    console.log(values)
                    })
                        }}

                       
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                <Form.Control  placeholder="Name"
                className= 'my-2 pro-input'
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <Form.Control placeholder="Description"
                className= 'my-2 pro-input'
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                />
                {errors.description && touched.description && errors.description}
                <Form.Control placeholder="Price"
                className= 'my-2 pro-input'
                    type="text"
                    name="price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                />
                {errors.price && touched.price && errors.price}
                <Form.Control placeholder="Quantity"
                className= 'my-2 pro-input'
                    type="text"
                    name="quantity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                />
                {errors.quantity && touched.quantity && errors.quantity}
                <Form.Control placeholder="File"
                className= 'my-2 pro-input'
                    ref={imgRef}
                    type="file"
                    name="file"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.file}
                />
                {errors.file && touched.file && errors.file}
                <Form.Select 
                className= 'my-2 select-opt'
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}

                >
                {category.map((category)=>{
                    return(
                        <option className="sel-opt" value={category._id}>{category.name}</option>
                        )
                })}
                </Form.Select>    
                {errors.category && touched.category && errors.category}
                <button className="sub-btn" type="submit" >
                    Submit
                </button>
                </form>
            )}
            </Formik>
        </div>

        

        </React.Fragment>
    )
}

export default ProductForm;