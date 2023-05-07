
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';

function Singin(){
    return(

        <div>
        <h1 style={{fontFamily:'monospace', textAlign:"center"}}>Signup</h1>
        <Formik
          initialValues={{ email: '', password: '',name:"", }}
          validate={values => {
            const errors = {};
            if (!values.email && values.name=="" ) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            
            <Form style={{textAlign:'center'}}>
             <label style={{marginRight:24 }} htmlFor="">Name  :</label> <Field  style={{margin:10 }} type="text" name="name" />
              <ErrorMessage name="name" component="div" /><br />
              <label style={{marginRight:25 }} htmlFor="">Email  :</label>  <Field  style={{margin:10}} type="email" name="email" />
              <ErrorMessage name="email" component="div" /><br />
              <label style={{marginRight:5 }} htmlFor="">Password:</label> <Field style={{margin:10}} type="password" name="password" />
              <ErrorMessage name="password" component="div" /><br />
              <Button variant="outline-success" style={{margin:10}}  type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )
}
export default Singin
