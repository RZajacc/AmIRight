import React from "react";
import styles from "../authComponent.module.css";
import LabeledInput from "@/components/ui/inputs/labeledInput";
import SubmitButton from "@/components/ui/buttons/submitButton";

type Props = {};

function SignupForm({}: Props) {
  return (
    <form className={styles.authForm}>
      <LabeledInput name="username" label="Username:" type="text" required />
      <LabeledInput name="email" label="Email:" type="email" required />
      <LabeledInput
        name="password"
        label="Password:"
        type="password"
        minLength={8}
        required
      />
      <LabeledInput
        name="password-confirm"
        label="Confirm password:"
        type="password"
        required
      />
      <SubmitButton text="Submit" />
    </form>
  );
}

export default SignupForm;
