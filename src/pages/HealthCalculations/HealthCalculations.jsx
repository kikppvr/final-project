import React, { useState } from "react";
import BMICalculator from "../../components/BMICalculator/BMICalculator";
import TDEECalculator from "../../components/TDEECalculator/TDEECalculator";
import DailyCaloricIntakeCalculator from "../../components/DailyCaloricIntakeCalculator/DailyCaloricIntakeCalculator";
import './HealthCalculations.scss'

const HealthCalculations = () => {
    const [activeTab, setActiveTab] = useState('bmi')

    return (
        <div className="health-calculations ">
            <div className="container">
                <h2 className="health-calculations-title">Health Calculations</h2>

                <div className="health-calculations-body">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'bmi' ? 'active' : ''}`} 
                                href="#bmi" 
                                onClick={() => setActiveTab('bmi')}>
                                    BMI Calculator
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'tdee' ? 'active' : ''}`} 
                                href="#tdee" 
                                onClick={() => setActiveTab('tdee')}>
                                    TDEE Calculator
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'daily-calories' ? 'active' : ''}`} 
                                href="#daily-calories" 
                                onClick={() => setActiveTab('daily-calories')}>
                                    Daily Caloric Intake
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {activeTab === 'bmi' &&  
                            <div>
                                <p className="text-10 text-a-brown-4d0a00 mb-4 px-3">
                                    <span className="font-bold">BMI (Body Mass Index) </span> 
                                    BMI Calculator helps determine if your weight is appropriate for your height 
                                    by categorizing it as underweight, normal, overweight, or obese.</p>
                                <BMICalculator />             
                            </div>
                        }

                        {activeTab === 'tdee' &&  
                            <div>
                                <p className="text-10 text-a-brown-4d0a00 mb-4 px-3">
                                    <span className="font-bold">TDEE (Total Daily Energy Expenditure) </span>
                                    TDEE Calculator estimates the total calories you burn in a day, 
                                    considering activities like exercise and daily tasks, to help maintain your current weight.
                                </p>
                                <TDEECalculator />
                            </div>
                        }
                        {activeTab === 'daily-calories' &&  
                            <div>
                                <p className="text-10 text-a-brown-4d0a00 mb-4 px-3">
                                    <span className="font-bold">Daily Caloric Intake Calculator </span> 
                                    Daily Caloric Intake Calculator calculates the number of calories you need each day to maintain, 
                                    lose, or gain weight based on your personal factors.
                                </p>
                                <DailyCaloricIntakeCalculator />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthCalculations;
