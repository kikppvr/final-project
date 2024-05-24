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

    const formSchema = Yup.object({
        height: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        weight: Yup.number().required('Required').positive('Must be positive'),
    })
    
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

    return (
        <div className="bmi-calculator">
            <h2>BMICalculator</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="height">Height (cm):</label>
                            <Field type="number" name="height" />
                            <ErrorMessage name="height" component="div" />
                        </div>
                        <div>
                            <label htmlFor="weight">Weight (kg):</label>
                            <Field type="number" name="weight" />
                            <ErrorMessage name="weight" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Calculate
                        </button>
                </Form>
                )}
            </Formik>
            { bmi && (
                <div>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{bmiMessage}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
