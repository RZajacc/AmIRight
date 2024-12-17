import React, { SetStateAction } from "react";
import styles from "./sidebar.module.css";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({ visible, setVisible }: Props) {
  return (
    <>
      <ul className={`${styles.sidebar} ${visible ? styles.visible : ""}`}>
        <li>Home</li>
        <li>Test</li>
      </ul>
      {/* Backdrop */}
      {visible && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setVisible((prevVal) => !prevVal);
          }}
          onScroll={() => {
            setVisible((prevVal) => !prevVal);
          }}
        />
      )}
    </>
  );
}
