import React from 'react';
import { Formik } from 'formik';


const CategoryForm = (props) => {
    
      
    
    return (

        <React.Fragment>
            <h1>Categories Form</h1>
            <div>
            
            <Formik
            initialValues={{ name: '', as: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                errors.name = 'Required';
                } 
                else if(!values.as){
                    errors.as = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

                 fetch('http://localhost:9000/category/server-add-category',{
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(values)
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
                <input placeholder="Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <input placeholder="As"
                    type="text"
                    name="as"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.as}
                />
                {errors.as && touched.as && errors.as}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
            )}
            </Formik>
        </div>

        </React.Fragment>
    )
}

export default CategoryForm;