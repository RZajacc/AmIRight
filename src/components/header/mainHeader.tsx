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
          {/* Home page section */}
          <div className={styles.navMain__section}>
            <li>
              <NavLink href="/">
                <span className={styles.home_link}>Am I right?</span>
              </NavLink>
            </li>
          </div>
          {/* Main desktop nav section */}
          <div className={styles.navMain__section} aria-label="desktop-nav">
            <li>
              <NavLink href="/issues">Current issues</NavLink>
            </li>
            <li>
              <NavLink href="/polls">Polls</NavLink>
            </li>
            <li>
              <NavLink href="/user" aria-label="Get started">
                Get Started
              </NavLink>
            </li>
          </div>
          {/* Hamburger menu section */}
          <div className={styles.navMain__section} aria-label="hamburger">
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
