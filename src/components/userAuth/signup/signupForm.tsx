import React from "react";
import styles from "../authComponent.module.css";

type Props = {};

function SignupForm({}: Props) {
  return (
    <form className={styles.authForm}>
      <label htmlFor="userName">Username</label>
      <input type="text" />
    </form>
  );
}

export default SignupForm;
