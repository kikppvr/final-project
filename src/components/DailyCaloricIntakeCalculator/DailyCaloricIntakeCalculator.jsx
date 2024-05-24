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

    const formSchema = Yup.object({
        tdee: Yup.number().required('Required').positive('Must be positive'),
        goal: Yup.string().oneOf(['maintain', 'lose', 'gain']).required('Required'),
    })
    
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

    return (
        <div className="daily-calculator">
            <h2>Daily CaloricIntake Calculator</h2>
            <Formik 
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="tdee">Your TDEE (kcal/day):</label>
                            <Field type="number" name="tdee" />
                            <ErrorMessage name="tdee" component="div" />
                        </div>
                        <div>
                            <label htmlFor="goal">Your Goal:</label>
                            <Field as="select" name="goal">
                                <option value="maintain">Maintain Weight</option>
                                <option value="lose">Lose Weight</option>
                                <option value="gain">Gain Weight</option>
                            </Field>
                            <ErrorMessage name="goal" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Calculate
                        </button>
                </Form>
                )}
            </Formik>
            {dailyCalories && (
                <div>
                    <h3>Your daily caloric intake should be: {dailyCalories} kcal/day</h3>
                </div>
            )}
        </div>
    );
};

export default DailyCaloricIntakeCalculator;
