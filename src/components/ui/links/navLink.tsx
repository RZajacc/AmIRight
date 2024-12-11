"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navLink.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

function NavLink({ href, children, ...props }: Props) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`link ${pathName === `${href}` ? styles.active : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavLink;
