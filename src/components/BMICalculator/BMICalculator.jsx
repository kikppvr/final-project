import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './BMICalculator.scss'

const BMICalculator = () => {
    const [bmi, setBmi] = useState(null)
    const [bmiMessage, setBmiMessage] = useState('')

    const initialValues = {
        height: '',
        weight: '',
    }

    const [hasValue, setHasValue] = useState({
        height: false,
        weight: false,
    });

    const formSchema = Yup.object({
        height: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        weight: Yup.number().required('Required').positive('Must be positive'),
    })

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
            setHasValue({ ...hasValue, [field]: e.target.value !== "" });
    };
    
    const calculateBMI = (height, weight) => {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        return bmi;
    }

    const getBmiMessage = (bmi) => {
        if(bmi < 18.5) return 'Underweight';
        if(bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
        if(bmi >= 25 && bmi < 29.9) return 'Overweight';
        return 'Obesity';
    }

    const handleSubmit = (values, {setSubmitting }) => {
        console.log('handleSubmit')
        const calculatedBmi = calculateBMI(values.height, values.weight);
        setBmi(calculatedBmi);
        setBmiMessage(getBmiMessage(calculatedBmi));
        setSubmitting(false);
    }

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="bmi-calculator">
            <h2 className="bmi-calculator-title">BMI Calculator</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ handleChange, isSubmitting }) => (
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
                                    onChange={(e) => handleChangeValidation(e, handleChange, "weight")}
                                />
                            </div>
                            <ErrorMessage name="weight" render={renderError}/>
                        </div>
                        
                        <button type="submit" className="btn-calculate" disabled={isSubmitting}>
                            Calculate
                        </button>
                </Form>
                )}
            </Formik>
            { bmi && (
                <div className="mt-[30px]">
                     <h3 className="font-medium text-a-brown-AF8F6F mb-2">Your BMI is: <span className="text-a-red-EE4E4E">{bmi}</span></h3>
                    <p className="mb-0 font-bold text-a-brown-543310">{bmiMessage}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
