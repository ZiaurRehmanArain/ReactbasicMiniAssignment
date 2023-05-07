import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';

function Login(){
    return(

        <div>
        <h2 style={{fontFamily:'monospace', textAlign:"center"}}>Login Page</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
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
export default Login



// import { useState } from "react";
// import styles from "./LoginForm.module.css";

// const LoginForm = props => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const onUpdateField = e => {
//     const nextFormState = {
//       ...form,
//       [e.target.name]: e.target.value,
//     };
//     setForm(nextFormState);
//   };

//   const onSubmitForm = e => {
//     e.preventDefault();
//     alert(JSON.stringify(form, null, 2));
//   };

//   return (
//     <form className={styles.form} onSubmit={onSubmitForm}>
//       <div className={styles.formGroup}>
//         <label className={styles.formLabel}>Email</label>
//         <input
//           className={styles.formField}
//           type="text"
//           aria-label="Email field"
//           name="email"
//           value={form.email}
//           onChange={onUpdateField}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.formLabel}>Password</label>
//         <input
//           className={styles.formField}
//           type="password"
//           aria-label="Password field"
//           name="password"
//           value={form.password}
//           onChange={onUpdateField}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.formLabel}>Confirm Password</label>
//         <input
//           className={styles.formField}
//           type="password"
//           aria-label="Confirm password field"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={onUpdateField}
//         />
//       </div>
//       <div className={styles.formActions}>
//         <button className={styles.formSubmitBtn} type="submit">
//           Login
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;