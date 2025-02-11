import React, { useState } from "react";
import LabeledInput from "@/components/ui/inputs/labeledInput";
import styles from "../../userAuth/authComponent.module.css";
import SubmitButton from "@/components/ui/buttons/submitButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

function LoginFrom({}: Props) {
  const [LoginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

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

    // Assign error to login form
    if (result?.error) {
      setLoginError(result.error);
    } else {
      // If theres no error reset error element and redirect
      setLoginError(null);
      router.push("/user/account");
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleLogin}>
      <LabeledInput name="email" label="Email:" type="email" required />
      <LabeledInput
        name="password"
        label="Password:"
        type="password"
        required
      />
      {LoginError && <p className={styles.errField}>{LoginError}</p>}
      <SubmitButton text="Login" />
    </form>
  );
}

export default LoginFrom;
