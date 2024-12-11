import Link from "next/link";
import React from "react";
import styles from "./desktopNav.module.css";

type Props = {};

function DestktopNav({}: Props) {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navMain}>
        <div className={styles.navMain__section}>
          <li>
            <Link href={"/"}>Am I right?</Link>
          </li>
          <li>
            <Link href={"/"}>Current issues</Link>
          </li>
          <li>
            <Link href={"/"}>Current Polls</Link>
          </li>
        </div>
        <div className={styles.navMain__section}>
          <li>
            <Link href={"/"}>User</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default DestktopNav;
