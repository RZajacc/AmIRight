import styles from "./page.module.css";

function User() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>
        <h3>Login, or signup if you don't have an account yet</h3>
      </div>
    </main>
  );
}

export default User;
