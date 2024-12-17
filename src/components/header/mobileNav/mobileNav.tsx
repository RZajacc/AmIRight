"use client";
import React, { useState } from "react";
import HamburgerButton from "../hamburgerButton/hamburgerButton";
import styles from "./mobileNave.module.css";

type Props = {};

function MobileNav({}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <HamburgerButton
        onClick={() => {
          setVisible((prevState) => !prevState);
        }}
      />
      <ul
        className={`${styles.mobileNav__dropdown} ${
          visible ? styles.visible : ""
        }`}
      >
        <li>Home</li>
        <li>Test</li>
      </ul>
    </div>
  );
}

export default MobileNav;
