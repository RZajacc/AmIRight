import React from "react";
import LabeledInput from "@/components/ui/inputs/labeledInput";
import styles from "../authComponent.module.css";
import SubmitButton from "@/components/ui/buttons/submitButton";

type Props = {};

function LoginFrom({}: Props) {
  return (
    <form className={styles.authForm}>
      <LabeledInput name="email" label="Email:" type="email" required />
      <LabeledInput
        name="password"
        label="Password:"
        type="password"
        minLength={8}
        required
      />
      <SubmitButton text="Login" />
    </form>
  );
}

export default LoginFrom;
