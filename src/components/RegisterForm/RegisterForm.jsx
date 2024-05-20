import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { apiBaseUrl } from "../../config";

import "./RegisterForm.scss";

function RegisterForm() {
    const [inputValues, setInputValues] = useState({});
    const apiRegister = `${apiBaseUrl}/register`

    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [hasValue, setHasValue] = useState({
        name: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const formSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        username: Yup.string().required("Username is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            let response = await axios.post(apiRegister, {
                name: values.name,
                username: values.username,
                email: values.email,
                password: values.password,
            });
            console.log('response ', response.data)
            alert("Registration successful!");
            resetForm()
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register user. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    // console.log("formSchema", formSchema);

    return (
        <div className="form-register">
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ handleChange, handleBlur }) => (
                    <Form className="grid gap-8 grid-cols-1">
                        <div className="form-row">
                            <div className={`form-control ${hasValue.name ? "has-value" : ""}`}>
                                <i className="fa-solid fa-user gradient-icon"></i>
                                <label className="form-label" htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setHasValue({
                                            ...hasValue,
                                            name: e.target.value !== "",
                                        });
                                    }}
                                />
                            </div>
                            <ErrorMessage name="name" render={renderError} />
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${hasValue.username ? "has-value" : "" }`} >
                                <i className="fa-solid fa-envelope gradient-icon"></i>
                                <label className="form-label" htmlFor="username">Username</label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setHasValue({
                                            ...hasValue,
                                            username: e.target.value !== "",
                                        });
                                    }}
                                />
                            </div>
                            <ErrorMessage
                                name="username"
                                render={renderError}
                            />
                        </div>

                        <div className="form-row">
                            <div
                                className={`form-control ${hasValue.email ? "has-value" : ""}`}>
                                <i className="fa-solid fa-envelope gradient-icon"></i>
                                <label className="form-label" htmlFor="email">Email</label>
                                <Field
                                    name="email"
                                    type="text"
                                    className="form-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setHasValue({
                                            ...hasValue,
                                            email: e.target.value !== "",
                                        });
                                    }}
                                />
                            </div>
                            <ErrorMessage name="email" render={renderError} />
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${hasValue.password ? "has-value" : "" }`}>
                                <i className="fa-solid fa-lock gradient-icon"></i>
                                <label className="form-label" htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setHasValue({
                                            ...hasValue,
                                            password: e.target.value !== "",
                                        });
                                    }}
                                />
                            </div>
                            <ErrorMessage
                                name="password"
                                render={renderError}
                            />
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${hasValue.confirmPassword ? "has-value" : "" }`}>
                                <i className="fa-solid fa-lock gradient-icon"></i>
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    className="form-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                        setHasValue({
                                            ...hasValue,
                                            confirmPassword:
                                                e.target.value !== "",
                                        });
                                    }}
                                />
                            </div>
                            <ErrorMessage
                                name="confirmPassword"
                                render={renderError}
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterForm;
