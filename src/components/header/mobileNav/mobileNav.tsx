import React from "react";

import styles from "./mobileNav.module.css";
import HamburgerButton from "@/components/ui/buttons/hamburger/hamburgerButton";
import NavLink from "@/components/ui/links/navLink";

type Props = {};

function MobileNav({}: Props) {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navMobile}>
        <li>
          <NavLink href="/">
            <span className={styles.home_link}>Am I right?</span>
          </NavLink>
        </li>
        <li>
          <HamburgerButton />
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
