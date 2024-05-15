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
      <div className="w-full form-register">
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
               <Form className="grid gap-3 grid-cols-1">
                  <div className="field">
                     <label className="label" htmlFor="name">Name</label>
                     <div className="control">
                        <Field
                           name="name"
                           type="text"
                           placeholder="Enter your name"
                           className="input"
                        />
                        <ErrorMessage name="name" render={renderError} />
                     </div>
                  </div>

                  <div className="field">
                     <label className="label" htmlFor="username">Username</label>
                     <div className="control">
                        <Field
                           name="username"
                           type="text"
                           placeholder="Enter your Username"
                           className="input"
                        />
                        <ErrorMessage name="username" render={renderError} />
                     </div>
                  </div>

                  <div className="field">
                     <label className="label" htmlFor="email">Email</label>
                     <div className="control">
                        <Field
                           name="email"
                           type="text"
                           placeholder="Yourname@gmail.com"
                           className="input"
                        />
                        <ErrorMessage name="email" render={renderError} />
                     </div>
                  </div>

                  <div className="field">
                     <label className="label" htmlFor="password">Password</label>
                     <div className="control">
                        <Field
                           name="password"
                           type="text"
                           placeholder="Enter your Password"
                           className="input"
                        />
                        <ErrorMessage name="password" render={renderError} />
                     </div>
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
