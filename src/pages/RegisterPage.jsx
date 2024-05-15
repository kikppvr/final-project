import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./RegisterPage.scss"

function Register() {

    return (
        <div className="register">
            <div className="register__bg"></div>
            <div className="register__body">
                <h1 className="register__title">Sign Up</h1>
                <RegisterForm />
            </div>
        </div>
    )

}

export default Register;

