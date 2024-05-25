import React, { useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './DailyCaloricIntakeCalculator.scss'

const DailyCaloricIntakeCalculator = () => {
    const [dailyCalories, setDailyCalories] = useState(null);
    
    const initialValues = {
        tdee: '',
        goal: 'maintain',
    }

    const [hasValue, setHasValue] = useState({
        tdee: false,
        goal: false,
    });

    const formSchema = Yup.object({
        tdee: Yup.number().required('Required').positive('Must be positive'),
        goal: Yup.string().oneOf(['maintain', 'lose', 'gain']).required('Required'),
    })

    const handleChangeValidation = (e, handleChange, field) => {
        handleChange(e),
            setHasValue({ ...hasValue, [field]: e.target.value !== "" });
    };
    
    const calculateDailyCalories = (tdee, goal) => {
        let calories = tdee;
        if (goal === "lose") {
            calories -= 500; // ลดน้ำหนัก
        } else if (goal === "gain") {
            calories += 500; // เพิ่มน้ำหนัก
        }
        return calories;
    };

    const handleSubmit = (values, {setSubmitting }) => {
        console.log('handleSubmit')
        const calculatedCalories = calculateDailyCalories(values.tdee, values.goal);
        setDailyCalories(calculatedCalories);
        setSubmitting(false);
    }

    const renderError = (message) => <p className="errorMessage">{message}</p>;

    return (
        <div className="daily-calculator">
            <h2 className="daily-calculator-title">Daily Caloric Intake Calculator</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting, handleChange  }) => (
                    <Form>
                        <div className="form-row">
                            <div className={`form-control ${ hasValue.tdee ? "has-value" : ""}`} >
                                <i className="fa-solid fa-heart"></i>
                                <label className="form-label"  htmlFor="tdee">Your TDEE (kcal/day)</label>
                                <Field
                                    name="tdee"
                                    type="number"
                                    className="form-input"
                                    onChange={(e) => handleChangeValidation(e,handleChange, "tdee")}
                                />
                            </div>
                            <ErrorMessage name="tdee" render={renderError}/>
                        </div>

               
                        <div className="form-row">
                            <div className={`form-control ${ hasValue.goal ? "has-value" : ""}`} >
                                <i className="fa-solid fa-hand-holding-heart"></i>
                                <Field className="form-select" as="select" name="goal">
                                    <option value="maintain">Maintain Weight</option>
                                    <option value="lose">Lose Weight</option>
                                    <option value="gain">Gain Weight</option>
                                </Field>
                            </div>
                            <ErrorMessage name="goal" render={renderError}/>
                        </div>

                        <button type="submit" className="btn-calculate" disabled={isSubmitting}>
                            Calculate
                        </button>
                </Form>
                )}
            </Formik>
            {dailyCalories && (
                <div className="mt-[30px]">
                    <h3 className="font-medium text-a-brown-AF8F6F mb-2">Your daily caloric intake should be: 
                    <span className="text-a-red-EE4E4E"> {dailyCalories}</span> kcal/day</h3>
                </div>
            )}
        </div>
    );
};

export default DailyCaloricIntakeCalculator;
