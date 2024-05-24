import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";

function Login() {
    return (
        <main className="login-main">
            <section className="login">
                <div className="container">
                    <div className="login__card shadow">
                        <h1 className="login__title">Login</h1>
                        <LoginForm />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
