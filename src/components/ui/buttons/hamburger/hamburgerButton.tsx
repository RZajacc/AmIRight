import React from "react";
import styles from "./hamburgerButton.module.css";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

function HamburgerButton({ ...props }: Props) {
  return (
    <div className={styles.buttonStyle} {...props}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default HamburgerButton;
