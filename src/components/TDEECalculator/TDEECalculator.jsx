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

    const handleSubmit = (values, { setSubmitting }) => {
        const bmr = calculateBMR(values.height, values.weight, values.age, values.gender);
        const tdee = calculateTDEE(bmr, values.activityLevel);
        setTdee(tdee);
        setSubmitting(false);
    }

    return (
        <div className="tdee-calculator">
            <h2>TDEE Calculator</h2>
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
                        <div>
                            <label htmlFor="age">Age:</label>
                            <Field type="number" name="age" />
                            <ErrorMessage name="age" component="div" />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender:</label>
                            <Field as="select" name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" />
                        </div>
                        <div>
                            <label htmlFor="activityLevel">Activity Level:</label>
                            <Field as="select" name="activityLevel">
                                <option value={1.2}>Sedentary (little or no exercise)</option>
                                <option value={1.375}>Lightly active (light exercise/sports 1-3 days/week)</option>
                                <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days/week)</option>
                                <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
                                <option value={1.9}>Super active (very hard exercise/sports & physical job or 2x training)</option>
                            </Field>
                            <ErrorMessage name="activityLevel" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Calculate
                        </button>
                    </Form>
                )}
            </Formik>
            {tdee && (
                <div>
                <h3>Your TDEE is: {tdee} kcal/day</h3>
                </div>
            )}
        </div>
    );
};

export default TDEECalculator;
