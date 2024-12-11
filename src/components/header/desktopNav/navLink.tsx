import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navLink.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: Props) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`link ${pathName === `${href}` ? styles.active : ""}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
