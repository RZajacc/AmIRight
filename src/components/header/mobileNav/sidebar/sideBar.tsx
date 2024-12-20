import React, { SetStateAction } from "react";
import styles from "./sidebar.module.css";
import cancelButton from "@/assets/cancel-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

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
          <Image src={cancelButton} width={30} alt="Cancel button" />
        </button>
        <li>
          <Link href={"/"} onClick={handleClosingSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/"} onClick={handleClosingSidebar}>
            Current issues
          </Link>
        </li>
        <li>
          <Link href={"/"} onClick={handleClosingSidebar}>
            Polls
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={handleClosingSidebar}
            aria-label="Get started"
          >
            Get started
          </Link>
        </li>
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
