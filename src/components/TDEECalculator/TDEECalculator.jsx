import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './TDEECalculator.scss'

const TDEECalculator = () => {
    const [tdee, setTdee] = useState(null);

    const initialValues = {
        height: '',
        weight: '',
        age: '',
        gender: 'male',
        activityLevel: 1.2,
    }

    const [hasValue, setHasValue] = useState({
        height: false,
        weight: false,
        age: false,
        gender: false,
        activityLevel: false,
    });

    const formSchema = Yup.object({
        height: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        weight: Yup.number().required('Required').positive('Must be positive'),
        age: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        gender: Yup.string().oneOf(['male', 'female']).required('Required'),
        activityLevel: Yup.number().required('Required').oneOf([1.2, 1.375, 1.55, 1.725, 1.9]),
    })

    const calculateBMR = (height, weight, age, gender) => {
        if (gender === 'male') {
          return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
          return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
    };

    const calculateTDEE = (bmr, activityLevel) => {
        return bmr * activityLevel;
    };

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
            setHasValue({ ...hasValue, [field]: e.target.value !== "" });
    };

    const handleSubmit = (values, { setSubmitting }) => {
        const bmr = calculateBMR(values.height, values.weight, values.age, values.gender);
        const tdee = calculateTDEE(bmr, values.activityLevel).toFixed(2);
        setTdee(tdee);
        setSubmitting(false);
    }

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="tdee-calculator">
            <h2 className="tdee-calculator-title">TDEE Calculator</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting, handleChange }) => (
                    <Form>
                        <div className="form-row">
                            <div className={`form-control ${ hasValue.height ? "has-value" : ""}`} >
                                <i className="fa-solid fa-person text-20"></i>
                                <label className="form-label"  htmlFor="height">Height (cm)</label>
                                <Field
                                    name="height"
                                    type="number"
                                    className="form-input"
                                    onChange={(e) => handleChangeValidation(e,handleChange, "height")}
                                />
                            </div>
                            <ErrorMessage name="height" render={renderError}/>
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${ hasValue.weight ? "has-value" : ""}`} >
                                <i className="fa-solid fa-weight-scale"></i>
                                <label className="form-label"  htmlFor="weight">Weight (kg)</label>
                                <Field
                                    name="weight"
                                    type="number"
                                    className="form-input"
                                    onChange={(e) => handleChangeValidation(e,handleChange, "weight")}
                                />
                            </div>
                            <ErrorMessage name="weight" render={renderError}/>
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${ hasValue.age ? "has-value" : ""}`} >
                                <i className="fa-brands fa-pagelines"></i>
                                <label className="form-label"  htmlFor="age">Age</label>
                                <Field
                                    name="age"
                                    type="number"
                                    className="form-input"
                                    onChange={(e) => handleChangeValidation(e,handleChange, "age")}
                                />
                            </div>
                            <ErrorMessage name="age" render={renderError}/>
                        </div>

                        <div className="form-row">
                            <div className={`form-control ${ hasValue.gender ? "has-value" : ""}`} >
                                <i className="fa-solid fa-venus-mars"></i>
                                <Field className="form-select" as="select" name="gender"> 
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                            </div>
                            <ErrorMessage name="gender" render={renderError}/>
                        </div>

                        
                        <div className="form-row">
                            <div className={`form-control ${ hasValue.activityLevel ? "has-value" : ""}`} >
                                <i className="fa-solid fa-dumbbell"></i>
                                {/* <Field className="form-select" as="select" name="activityLevel">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Field> */}
                                <Field className="form-select" as="select" name="activityLevel">
                                    <option value={1.2}>Sedentary (little or no exercise)</option>
                                    <option value={1.375}>Lightly active (light exercise/sports 1-3 days/week)</option>
                                    <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days/week)</option>
                                    <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
                                    <option value={1.9}>Super active (very hard exercise/sports & physical job or 2x training)</option>
                                </Field>
                            </div>
                            <ErrorMessage name="activityLevel" render={renderError}/>
                        </div>

                        <button type="submit" className="btn-calculate" disabled={isSubmitting}>
                            Calculate
                        </button>
                    </Form>
                )}
            </Formik>
            {tdee && (
                <div className="mt-[30px]">
                    <h3 className="font-medium text-a-brown-AF8F6F mb-2">Your TDEE is: <span className="text-a-red-EE4E4E">{tdee}</span> kcal/day</h3>
                </div>
            )}
        </div>
    );
};

export default TDEECalculator;
