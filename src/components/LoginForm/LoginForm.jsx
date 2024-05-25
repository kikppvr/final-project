import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessModal from "../../components/Modal/SuccessModal/SuccessModal";
import LoadingModal from "../Modal/LoadingModal/LoadingModal";
import AlertModal from "../Modal/AlertModal/AlertModal";

import "./LoginForm.scss";
import { loginUser } from "../../redux/actions";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.userReducer)

    useEffect(() => {
        // setShowLoadingModal(true)
        // setShowAlertModal(true)
        // setShowSuccessModal(true)
    })

    const initialValues = {
        username: "",
        password: "",
    };

    const [hasValue, setHasValue] = useState({
        username: false,
        password: false,
    });

    const formSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
            setHasValue({ ...hasValue, [field]: e.target.value !== "" });
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setShowLoadingModal(true)
        try {
            let response = await dispatch(loginUser(values));
            if (response) {
                setShowLoadingModal(false);
                setSuccessMessage("Login success!")
                setShowSuccessModal(true);
            } else {
                setShowLoadingModal(false);
                setAlertMessage("User not found!");
                setShowAlertModal(true);
            }
        } catch (error) {
            setShowLoadingModal(false);
            setAlertMessage("An error occurred. Please try again.");
            setShowAlertModal(true);
            console.error(error);
        }
        setSubmitting(false);

    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        window.location.replace('/')
    };

    const handleCloseAlertModal = () => {
        setShowAlertModal(false)
        navigate(0)
    }

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="form-login">
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit} >
                {({ handleChange, isSubmitting }) => (
                    <Form className="">
                        <div className="form-row">
                            <div className={`form-control ${ hasValue.username ? "has-value" : ""}`} >
                                <i className="fa-solid fa-user gradient-icon"></i>
                                <label className="form-label"  htmlFor="username">Username</label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    autoComplete="username"
                                    onChange={(e) => handleChangeValidation(e,handleChange, "username")}
                                />
                            </div>
                            <ErrorMessage name="username" render={renderError}/>
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${ hasValue.password ? "has-value" : ""}`}>
                                <i className="fa-solid fa-lock gradient-icon"></i>
                                <label className="form-label" htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="form-input"
                                    autoComplete="new-password"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "password")}
                                />
                                <span
                                    className={`text-10 cursor-pointer text-a-green-91C788 ${hasValue.password ? "block" : "hidden"}`}
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "HIDE" : "SHOW"}
                                </span>
                            </div>
                            <ErrorMessage name="password" render={renderError} />
                        </div>

                        <button type="submit" className="btn-submit" disabled={isSubmitting || loading}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

            {showLoadingModal && (
                <LoadingModal />
            )}

            {showSuccessModal && (
                <SuccessModal onClose={handleCloseSuccessModal}>
                    <p>{successMessage}</p>
                </SuccessModal>
            )}

            {showAlertModal && (
                <AlertModal onClose={handleCloseAlertModal}>
                    <p>{alertMessage}</p>
                </AlertModal>
            )}
        </div>
    );
}

export default LoginForm;
