import NavLink from "@/components/ui/links/navLink";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <h2>Am I right?</h2>
      <p>
        For anyone who whatched "How I met your mother" serie, probably you
        remember the episode where Ted and Barney walk around the city with a
        bunch of students, and use them to judge who is right on several
        different subjects. Well this is the implementation of this idea. You
        can post a question/problem that you encountered with your friend and
        partner and leave it open for a public to judge if you're right, or
        wrong about it.
      </p>
      <section>
        <NavLink href="issues" className={styles.navLink}>
          Current issues
        </NavLink>
        <NavLink href="user" className={styles.navLink}>
          Get started
        </NavLink>
      </section>
    </div>
  );
}
