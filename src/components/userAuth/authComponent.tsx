"use client";

import styles from "./authComponent.module.css";
import { useState } from "react";
import LoginFrom from "./login/loginFrom";
import SignupForm from "./signup/signupForm";

function AuthComponent() {
  const [loginSelected, setLoginSelected] = useState(true);

  // Toggle button description
  const formToggleSignup = "Don't have an account yet? Click here to ";
  const formToggleLogin = "Already have an account? Click here to ";

  // Toggle forms handler
  const formSelectHandler = () => {
    setLoginSelected((prevVal) => !prevVal);
  };

  return (
    <div className={styles.formContainer}>
      {/* Header */}
      {loginSelected ? (
        <h3>Login to your account:</h3>
      ) : (
        <h3>Create a new account:</h3>
      )}

      {/* Selected form */}
      {loginSelected ? <LoginFrom /> : <SignupForm />}

      {/* Toggle between login and signup */}
      <p>
        {loginSelected ? formToggleSignup : formToggleLogin}
        <button onClick={formSelectHandler} className={styles.toggle_button}>
          {loginSelected ? "signup" : "login"}!
        </button>
      </p>
    </div>
  );
}

export default AuthComponent;
