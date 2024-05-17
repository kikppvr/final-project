import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./RegisterForm.scss";

function RegisterForm() {
   const formSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
         .min(8, "Password must be at least 8 characters")
         .required("Password is required"),
      // confirmPassword: Yup.string().required('Confirm Password is required'),
   });

   const renderError = (message) => <p className="errorMessage">{message}</p>;

   console.log("formSchema", formSchema);

   return (
      <div className="form-register">
         <Formik
            initialValues={{
               name: "",
               username: "",
               email: "",
               password: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {(formik) => (
               <Form className="grid gap-8 grid-cols-1">
                  <div className="form-row">
                     <div className="form-control">
                        <i className="fa-solid fa-user gradient-icon"></i>
                        <Field name="name" type="text" className="form-input" />
                        <label className="form-label" htmlFor="name">Name</label>
                     </div>
                     <ErrorMessage name="name" render={renderError} />
                  </div>

                  <div className="form-row">
                     <label className="form-label" htmlFor="username">Username</label>
                     <div className="form-control">
                        <i className="fa-solid fa-envelope gradient-icon"></i>
                        <Field name="username" type="text" className="form-input" />
                     </div>
                     <ErrorMessage name="username" render={renderError} />
                  </div>

                  <div className="form-row">
                     <label className="form-label" htmlFor="email">Email</label>
                     <div className="form-control">
                        <i className="fa-solid fa-envelope gradient-icon"></i>
                        <Field name="email" type="text" className="form-input" />
                     </div>
                     <ErrorMessage name="email" render={renderError} />
                  </div>

                  <div className="form-row">
                     <label className="form-label" htmlFor="password">Password</label>
                     <div className="form-control">
                        <i className="fa-solid fa-lock gradient-icon"></i>
                        <Field name="password" type="text" className="form-input" />
                     </div>
                     <ErrorMessage name="password" render={renderError} />
                  </div>

                  <button type="submit" className="btn-submit" autoComplete="current-password">
                     Register
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default RegisterForm;
