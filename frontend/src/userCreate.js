// import React,{useState,useEffect} from 'react';
import React,{useState} from 'react';
import {Formik} from 'formik';
import {Form,Button,} from 'react-bootstrap';
import UserForm from "./userLogin";
import './App.css';

const UserCreate = (props) => {

  const [loadLogin, setLogin] = useState();

  const [toast, setToast] = useState();

  let lodLogin;

    return(
      <React.Fragment>
          {toast}
          {loadLogin}

        <div className="sign-up-div">
         <h1>Sign Up Here</h1>
            
        
        <Formik
          initialValues={{name:'', email: '', password: '',confirmpassword:''}}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
              return errors;
              } 
              else if(!values.email){
                  errors.email = 'Required';
                  return errors;
              }
              else if(!values.password){
                  errors.password = 'Required';
                  return errors;
              }
              else if(!values.confirmpassword){
                  errors.confirmpassword = 'Required';
                  return errors;
              }
              else if(values.password !== values.confirmpassword)
              {
                errors.confirmpassword = 'Not Matched';
                return errors;
              }
              lodLogin = () => {

                setLogin(<UserForm />)
                document.querySelector('.sign-up-div').style.display = 'none';
              }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch('http://localhost:9000/user/add-user-data',{
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({name:values.name,email:values.email,password:values.password})
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                    
                      setToast(<div id='toast'>

                <div class="toast text-white bg-primary border-0">
                  <div class="d-flex align-items-center">
                    <div class="toast-body">
                      {data.message}
                    </div>
                    <button type="button" onClick={() => { document.querySelector('#toast').style.display = 'none' }} class="btn-close"></button>
                  </div>
                </div>
              </div>)

              setTimeout(() => { document.querySelector('#toast').style.display = 'block' }, 100);



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
               <Form.Control
              className="my-3 log-inp"
              placeholder='Enter Name'
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <Form.Control
              className="my-3 log-inp"
              placeholder='Enter Email'
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <Form.Control
              className="my-3 log-inp"
              placeholder='Enter Password'
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <Form.Control
              className="my-3 log-inp"
              placeholder='Enter Confirm Password'
                type="password"
                name="confirmpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmpassword}
              />
              {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
              <button type="submit" onClick={lodLogin} className="log-btn">
               Submit
             </button>
              
            
            </form>
          )}
        </Formik>
      </div>
      </React.Fragment>
    )
}

export default UserCreate;