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
      <LabeledInput name="username" label="Username:" type="text" required />
      {state?.errors.username && <p>{state.errors.username}</p>}
      <LabeledInput name="email" label="Email:" type="email" required />
      {state?.errors.email && <p>{state.errors.email}</p>}
      <LabeledInput
        name="password"
        label="Password:"
        type="password"
        minLength={8}
        required
      />
      {state?.errors.password && (
        <div>
          <p>Password must:</p>
          <ul>
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
        required
      />
      {state?.errors.confirm && <p>{state.errors.confirm}</p>}
      <SubmitButton text="Signup" />
    </form>
  );
}

export default SignupForm;
