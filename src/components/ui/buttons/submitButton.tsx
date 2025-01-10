import React from "react";
import styles from "./submitButton.module.css";

type Props = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SubmitButton({ text }: Props) {
  return (
    <button type="submit" className={styles.buttonStyle}>
      {text}
    </button>
  );
}

export default SubmitButton;
