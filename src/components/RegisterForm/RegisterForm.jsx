import React, { useState }from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../redux/actions';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessModal from "../Modal/SuccessModal/SuccessModal";
// import { apiBaseUrl } from "../../config";
//scss
import "./RegisterForm.scss";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.userReducer)
    // const apiRegister = `${apiBaseUrl}/register`

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
        name: Yup.string().min(2, 'Name is too short!').max(50, 'Name is too Long!').required("Name is required"),
        username: Yup.string().min(2, 'Username is too short!').max(50, 'Username is too Long!').required("Username is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
                .min(8, "Password is too short!")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
                .required("Password is required"),
        // password: Yup.string().min(8, 'Password is too short!').required("Password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
                        .required("Confirm Password is required"),
    });


    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
        setHasValue({...hasValue, [field]: e.target.value !== ""});
    }

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
       try {
            await dispatch(registerUser(values))
            navigate('/login')
       } catch (error) {
            console.error(error);
       }

       setSubmitting(false);
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate("/login");
    }

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="form-register">
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ handleChange, isSubmitting }) => (
                    <Form className="">
                        <div className="form-row">
                            <div className={`form-control ${hasValue.name ? "has-value" : ""}`}>
                                <i className="fa-solid fa-id-badge"></i>
                                <label className="form-label" htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "name")}
                                />
                            </div>
                            <ErrorMessage name="name" render={renderError} />
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${hasValue.username ? "has-value" : "" }`} >
                                <i className="fa-solid fa-user gradient-icon"></i>
                                <label className="form-label" htmlFor="username">Username</label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    autoComplete="username"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "username")}
                                />
                            </div>
                            <ErrorMessage name="username" render={renderError} />
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
                                    autoComplete="email"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "email")}
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
                                    type={showPassword ? "text" : "password"} 
                                    className="form-input"
                                    autoComplete="new-password"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "password")}
                                />
                                <span className={`text-10 cursor-pointer text-a-green-91C788 ${hasValue.password ? "block" : "hidden"}`}
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? "HIDE" : "SHOW"}
                                </span>
                            </div>
                            <ErrorMessage name="password" render={renderError} />
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${hasValue.confirmPassword ? "has-value" : "" }`}>
                                <i className="fa-solid fa-unlock-keyhole"></i>
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <Field
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"} 
                                    className="form-input"
                                    autoComplete="new-password"
                                    onChange={(e) => handleChangeValidation(e, handleChange, "confirmPassword")}
                                />
                                <span className={`text-10 cursor-pointer text-a-green-91C788 ${hasValue.confirmPassword ? "block" : "hidden"}`}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? "HIDE" : "SHOW"}
                                </span>
                            </div>
                            <ErrorMessage name="confirmPassword" render={renderError} />
                        </div>

                        <button type="submit" className="btn-submit"  disabled={isSubmitting || loading}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

            {showSuccessModal && <SuccessModal onClose={handleCloseModal} />}
        </div>
    );
}

export default RegisterForm;
