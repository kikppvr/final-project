import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import "./Register.scss";

function Register() {
    return (
        <main className="register-main">
            <section className="register">
                <div className="container">
                    <div className="register__card shadow">
                        <h1 className="register__title">Sign in</h1>
                        <RegisterForm />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;
