"use client";
import React, { useState } from "react";
import styles from "./mainHeader.module.css";
import NavLink from "../ui/links/navLink";
import MobileNav from "./mobileNav/mobileNav";

type Props = {};

function MainHeader({}: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      <nav className={styles.navWrapper}>
        <ul className={styles.navMain}>
          {/* Home page section */}
          <div
            className={`${styles.navMain__section} ${
              visible ? styles.visible : ""
            }`}
          >
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
          <div className={styles.navMain__section} aria-label="mobile-nav">
            <li id={styles.mobileNav__item}>
              <MobileNav visible={visible} setVisible={setVisible} />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
