import React from "react";
import LabeledInput from "@/components/ui/inputs/labeledInput";
import styles from "../../userAuth/authComponent.module.css";
import SubmitButton from "@/components/ui/buttons/submitButton";
import { signIn } from "next-auth/react";

type Props = {};

function LoginFrom({}: Props) {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    console.log("STATUS", result?.status);
    console.log("ERROR", result?.error);
  };

  return (
    <form className={styles.authForm} onSubmit={handleLogin}>
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
