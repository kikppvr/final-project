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
                <h2>Health Calculations</h2>
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
            </div>
            <div className="tab-content mt-3">
                {activeTab === 'bmi' &&  <BMICalculator />}
                {activeTab === 'tdee' &&  <TDEECalculator />}
                {activeTab === 'daily-calories' &&  <DailyCaloricIntakeCalculator />}
            </div>
        </div>
    );
};

export default HealthCalculations;
