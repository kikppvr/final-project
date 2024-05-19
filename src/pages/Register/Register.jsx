import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import "./Register.scss";

function Register() {
   return (
      <div className="register">
         <div className="register__card">
            <h1 className="register__title">Sign Up</h1>
            <RegisterForm />
         </div>
      </div>
   );
}

export default Register;
