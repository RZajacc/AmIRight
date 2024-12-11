"use client";

import Link from "next/link";
import React from "react";
import styles from "./desktopNav.module.css";
import NavLink from "./navLink";

type Props = {};

function DestktopNav({}: Props) {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navMain}>
        <div className={styles.navMain__section}>
          <li>
            <NavLink href="/">Am I right</NavLink>
          </li>
        </div>
        <div className={styles.navMain__section}>
          <li>
            <NavLink href="/issues">Current issues</NavLink>
          </li>
          <li>
            <NavLink href="/polls">Polls</NavLink>
          </li>
          <li>
            <Link href={"/"}>User</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default DestktopNav;
