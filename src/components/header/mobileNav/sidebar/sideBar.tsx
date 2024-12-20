import React, { SetStateAction } from "react";
import styles from "./sidebar.module.css";
import cancelButton from "@/assets/cancel-svgrepo-com.svg";
import Image from "next/image";
import NavLink from "@/components/ui/links/navLink";

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
          <NavLink href="/" onClick={handleClosingSidebar}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/issues" onClick={handleClosingSidebar}>
            Current issues
          </NavLink>
        </li>
        <li>
          <NavLink href="/polls" onClick={handleClosingSidebar}>
            Polls
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/user"
            onClick={handleClosingSidebar}
            aria-label="Get started"
          >
            Get started
          </NavLink>
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
