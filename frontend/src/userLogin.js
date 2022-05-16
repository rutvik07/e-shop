// import React,{useState,useEffect} from 'react';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Form, Button, } from 'react-bootstrap';
import UserCreate from "./userCreate";
import Logout from "./logout";
import {useHistory } from 'react-router-dom';
import './App.css';

const UserForm = (props) => {

  const [loadSignup, setSignUp] = useState();

  const [toast, setToast] = useState();
  
  let history = useHistory();

  // const[logout,setLogout] = useState();


  const lodSignup = () => {

    setSignUp(<UserCreate />)
    document.querySelector('.login-div').style.display = 'none';
    
  }

  let logout;
  
  return (
    <React.Fragment>
     
              
      {loadSignup}
      {toast}
      {logout}
      <div className="login-div">
        <h1>Login Here</h1>


        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Required';
            }
            else if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch('http://localhost:9000/user/user-data ', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ getemail: values.email, getpassword: values.password })
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log(data.data);
              console.log(data.message);
              // alert(data.message);

              if(data.status==true){
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


              setTimeout(() => history.push('/AllProducts'), 700);

              
              }
              
              else{
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
              }

              


              // setTimeout(() => { document.querySelector('#toast').style.display = 'block' }, 100);

              // history.push('/AllProducts');

              logout = () => {

                
                document.querySelector('.log-text').style.display = 'none';
              }


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

              <button type="submit" onClick={logout} class="log-btn">
                Submit
              </button>

              <button type="button" onClick={lodSignup}  class="signup-btn">
                Sign Up
              </button>


            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  )
}

export default UserForm;
