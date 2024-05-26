import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SuccessModal from '../../components/Modal/SuccessModal/SuccessModal';
import LoadingModal from '../../components/Modal/LoadingModal/LoadingModal';
import AlertModal from '../../components/Modal/AlertModal/AlertModal';

import './EditProfile.scss'
import { updateProfile } from '../../redux/actions';

const EditProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.userInfo);
    
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        // setShowLoadingModal(true)
        // setShowAlertModal(true)
        // setShowSuccessModal(true)
    })

    const initialValues = {
        _id: user ? user._id : "", // Ensure _id is included
        name: user ? user.name : "",
        username: user ? user.username : "",
        email: user ? user.email : "",
    };

    const [hasValue, setHasValue] = useState({
        name: false,
        username: false,
        email: false,
    });

    useEffect(() => {
        setHasValue({
            name: !!user.name,
            username: !!user.username,
            email: !!user.email,
        });
    }, [user]);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        // Add more validations as necessary
    });

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
        setHasValue({...hasValue, [field]: e.target.value !== ""});
    }

    const handleSubmit = async (values, { setSubmitting }) => {

        console.log('values', values)
        setSubmitting(true);
        setSuccessMessage("");
        setAlertMessage("");
        setShowLoadingModal(true);

         // ตรวจสอบและส่งค่าที่ไม่ได้อัพเดท
         const updatedValues = {
            _id: values._id,
            name: values.name !== initialValues.name ? values.name : user.name,
            username: values.username !== initialValues.username ? values.username : user.username,
            email: values.email !== initialValues.email ? values.email : user.email,
        };
        
        try {
            let response = await dispatch(updateProfile(updatedValues));
            // console.log('response: ', response);
            setShowLoadingModal(false);
            if (response && response.payload) {
                setSuccessMessage("Profile updated successfully!");
                setShowSuccessModal(true);
            } else {
                setAlertMessage("Failed to update profile. Please try again.");
                setShowAlertModal(true);
            }
    
        } catch (error) {
            // console.log('error: ', error)
            setShowLoadingModal(false);
            setAlertMessage("An error occurred while updating the profile. Please try again.");
            setShowAlertModal(true);
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

        <div className="profile-edit">
            <div className="container">
                <div className="profile-edit-body">
                    <div className="profile-edit-image">
                        <img className="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>

                    <div className="profile-edit-form">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ handleChange, isSubmitting }) => (
                                <Form>
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
                      
                                    <button type="submit" className="btn btn-save-change" disabled={isSubmitting}>
                                        Save Changes
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                 
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
            </div>
        </div>
    );
};

export default EditProfile;
