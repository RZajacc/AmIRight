import AuthComponent from "@/components/userAuth/authComponent";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User",
  description: "Signup or login",
};

function User() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>
        <h3>Login, or signup if you don't have an account yet</h3>
        <AuthComponent />
      </div>
    </main>
  );
}

export default User;
