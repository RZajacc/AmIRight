import React from "react";
import styles from "./desktopNav.module.css";
import NavLink from "@/components/ui/links/navLink";

type Props = {};

function DestktopNav({}: Props) {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navMain}>
        <div className={styles.navMain__section}>
          <li>
            <NavLink href="/">
              <span className={styles.home_link}>Am I right?</span>
            </NavLink>
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
            <NavLink href="/user" about="Get started">
              Get Started
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default DestktopNav;
