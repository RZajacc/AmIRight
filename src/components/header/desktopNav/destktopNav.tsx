import Link from "next/link";
import React from "react";

type Props = {};

function DestktopNav({}: Props) {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Am I right?</Link>
        </li>
        <li>
          <Link href={"/"}>Current issues</Link>
        </li>
        <li>
          <Link href={"/"}>Current Polls</Link>
        </li>
        <li>
          <Link href={"/"}>User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DestktopNav;
