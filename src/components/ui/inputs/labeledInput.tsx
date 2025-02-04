import React from "react";
import styles from "./labeledInput.module.css";

type Props = {
  name: string;
  label: string;
  type: string;
  invalid: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function LabeledInput({ name, label, type, invalid, ...props }: Props) {
  console.log("INVALID", invalid);
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`${styles.input} ${invalid && styles.invalid}`}
        {...props}
      />
    </>
  );
}

export default LabeledInput;
