import { useActionState } from "react";
import styles from "../../userAuth/authComponent.module.css";
import LabeledInput from "@/components/ui/inputs/labeledInput";
import SubmitButton from "@/components/ui/buttons/submitButton";
import { signup } from "@/app/actions/auth";

type Props = {};

function SignupForm({}: Props) {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form className={styles.authForm} action={action}>
      <LabeledInput
        name="username"
        label="Username:"
        type="text"
        invalid={state?.errors.username ? true : false}
        required
      />
      {state?.errors.username && (
        <p className={styles.errParagraph}>{state.errors.username}</p>
      )}
      <LabeledInput
        name="email"
        label="Email:"
        type="email"
        invalid={state?.errors.email ? true : false}
        required
      />
      {state?.errors.email && (
        <p className={styles.errParagraph}>{state.errors.email}</p>
      )}
      <LabeledInput
        name="password"
        label="Password:"
        type="password"
        minLength={8}
        invalid={state?.errors.password ? true : false}
        required
      />
      {state?.errors.password && (
        <div>
          <p className={styles.errParagraph}>Password must:</p>
          <ul className={styles.errList}>
            {state.errors.password.map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        </div>
      )}
      <LabeledInput
        name="confirm"
        label="Confirm password:"
        type="password"
        invalid={state?.errors.confirm ? true : false}
        required
      />
      {state?.errors.confirm && (
        <p className={styles.errParagraph}>{state.errors.confirm}</p>
      )}
      <SubmitButton text="Signup" disabled={pending} />
    </form>
  );
}

export default SignupForm;
