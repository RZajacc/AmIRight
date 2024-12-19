import React, { SetStateAction } from "react";
import styles from "./sidebar.module.css";
import cancelButton from "@/assets/cancel-svgrepo-com.svg";
import Image from "next/image";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({ visible, setVisible }: Props) {
  const handleClosingSidebar = () => {
    setVisible((prevVal) => !prevVal);
  };
  return (
    <>
      <ul className={`${styles.sidebar} ${visible ? styles.visible : ""}`}>
        <button className={styles.cancelButton} onClick={handleClosingSidebar}>
          <Image src={cancelButton} width={35} alt="Cancel button" />
        </button>
        <li>Home</li>
        <li>Test</li>
      </ul>
      {/* Backdrop */}
      {visible && (
        <div
          className={styles.backdrop}
          onClick={handleClosingSidebar}
          onScroll={handleClosingSidebar}
        />
      )}
    </>
  );
}
