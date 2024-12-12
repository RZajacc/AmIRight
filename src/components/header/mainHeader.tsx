import React from "react";
import styles from "./mainHeader.module.css";
import NavLink from "../ui/links/navLink";
import HamburgerButton from "../ui/buttons/hamburger/hamburgerButton";

type Props = {};

function MainHeader({}: Props) {
  return (
    <header>
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
            <li>
              <HamburgerButton />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
