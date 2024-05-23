import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessModal from "../../components/Modal/SuccessModal/SuccessModal";
import axios from "axios";
import { apiBaseUrl } from "../../config";

import "./LoginForm.scss";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate();
    const apiLogin = `${apiBaseUrl}/login`;

    const initialValues = {
        username: "",
        password: "",
    };

    const [hasValue, setHasValue] = useState({
        username: false,
        password: false,
    });

    const formSchema = Yup.object({
        username: Yup.string()
            .min(2, "Username is too short!")
            .max(50, "Username is too Long!")
            .required("Username is required"),
        password: Yup.string()
            .min(8, "Password is too short!")
            .matches(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .matches(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(
                /[@$!%*?&#]/,
                "Password must contain at least one special character"
            )
            .required("Password is required"),
    });

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
            setHasValue({ ...hasValue, [field]: e.target.value !== "" });
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            let response = await axios.post(apiLogin, {
                username: values.username,
                password: values.password,
            });
            console.log("response ", response.data);
            setShowSuccessModal(true);
            resetForm();
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error("Error registering user:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="form-login">
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
            >
                {({ handleChange }) => (
                    <Form className="grid gap-8 grid-cols-1">
                        <div className="form-row">
                            <div
                                className={`form-control ${
                                    hasValue.username ? "has-value" : ""
                                }`}
                            >
                                <i className="fa-solid fa-user gradient-icon"></i>
                                <label
                                    className="form-label"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        handleChangeValidation(
                                            e,
                                            handleChange,
                                            "username"
                                        )
                                    }
                                />
                            </div>
                            <ErrorMessage
                                name="username"
                                render={renderError}
                            />
                        </div>

                        <div className="form-row">
                            <div
                                className={`form-control ${
                                    hasValue.password ? "has-value" : ""
                                }`}
                            >
                                <i className="fa-solid fa-lock gradient-icon"></i>
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="form-input"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        handleChangeValidation(
                                            e,
                                            handleChange,
                                            "password"
                                        )
                                    }
                                />
                                <span
                                    className={`text-10 cursor-pointer text-a-green-91C788 ${
                                        hasValue.password ? "block" : "hidden"
                                    }`}
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "HIDE" : "SHOW"}
                                </span>
                            </div>
                            <ErrorMessage
                                name="password"
                                render={renderError}
                            />
                        </div>

                        <button type="submit" className="btn-submit">
                            Login
                        </button>
                    </Form>
                )}
            </Formik>

            {showSuccessModal && (
                <SuccessModal onClose={() => setShowSuccessModal(false)} />
            )}
        </div>
    );
}

export default LoginForm;
