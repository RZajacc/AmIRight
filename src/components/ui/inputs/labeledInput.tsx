import React from "react";
import styles from "./labeledInput.module.css";

type Props = {
  name: string;
  label: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function LabeledInput({ name, label, type, ...props }: Props) {
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <input type={type} name={name} className={styles.input} {...props} />
    </>
  );
}

export default LabeledInput;
